"use client";

import { useState, useRef, useEffect } from "react";
import MusicPoolCard from "./MusicPoolCard";
import { RiArrowRightUpLine } from "@remixicon/react";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import ArtistProfileExpanded from "./ArtistProfileExpanded";
import CreateCampaignModal from "./CreateCampaignModal";
import { listMusic, MusicData } from "@/app/services/musicApi";
import { useAccount } from "wagmi";
import {
  useCrowdfundingPool,
  useGetCampaignByToken,
} from "@/app/hooks/useCrowdfundingPool";
import { getLocalMusic } from "@/app/utils/localStorage";

interface MusicPoolProps {
  title?: string;
  onClickLanjut?: () => void;
  showCampaignButton?: boolean; // Show "Buat Pool Pendanaan" button (only for musicians)
}

interface MusicProps {
  musicId: number;
  musicTitle: string;
  musicCloseHour: number;
  musicOnClick: () => void;
  musicIcon?: string;
  musicArtist: string;
  musicUrl: string;
  coverImageUrl?: string;
  genre?: string;
}

const DummyMusic: MusicProps[] = [
  {
    musicId: 1,
    musicTitle: "Mejikuhibiniu",
    musicCloseHour: 48,
    musicArtist: "Tenxi",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/mejikuhibiniu.mp3",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616d00001e024d265eb3c717ab45470fdc8c",
    genre: "Indie Pop",
  },
  {
    musicId: 2,
    musicTitle: "Pikiran yang matang",
    musicCloseHour: 12,
    musicArtist: "Perunggu",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/pikiran-yang-matang.mp3",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    genre: "Alternative Rock",
  },
  {
    musicId: 3,
    musicTitle: "Alamak",
    musicCloseHour: 24,
    musicArtist: "Rizky Febian, Adrian Khalif",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/alamak.mp3",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616d00001e0201b9750a33d771645d7f043a",
    genre: "Pop",
  },
  {
    musicId: 4,
    musicTitle: "kids",
    musicCloseHour: 48,
    musicArtist: "Hindia",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/kids-hindia.mp3",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616d00001e0205898628baab6ef07a0a4d03",
    genre: "Indie",
  },
  {
    musicId: 5,
    musicTitle: "Tabola Bale",
    musicCloseHour: 18,
    musicArtist: "Silet Open Up, Jacson Zeran, Juan Reza, Diva Aurel",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/tabola-bale.mp3",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    genre: "Hip Hop",
  },
];

const MusicPool = ({
  title = "Your Top Song",
  showCampaignButton = false,
}: MusicPoolProps) => {
  const { isConnected } = useAccount();
  const [activeSongId, setActiveSongId] = useState<number | null>(null);
  const [activeSong, setActiveSong] = useState<MusicProps | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const [musicList, setMusicList] = useState<MusicProps[]>(DummyMusic);
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [selectedMusicForCampaign, setSelectedMusicForCampaign] =
    useState<MusicProps | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Generate random closing hours
  const generateRandomCloseHour = () => {
    const options = [6, 12, 18, 24, 48, 72, 96]; // 6h, 12h, 18h, 1d, 2d, 3d, 4d
    return options[Math.floor(Math.random() * options.length)];
  };

  // Fetch music data from backend and merge with localStorage
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        // Get localStorage music
        const localMusic = getLocalMusic();
        const transformedLocalMusic: MusicProps[] = localMusic.map((music) => ({
          musicId: parseInt(music.id.replace('local-', '')),
          musicTitle: music.title,
          musicCloseHour: generateRandomCloseHour(),
          musicArtist: music.artist,
          musicOnClick: () => {},
          musicUrl: music.audioFileUrl,
          coverImageUrl: music.coverImageUrl,
          genre: music.genre,
        }));

        // Fetch backend music
        const response = await listMusic({ limit: 5 });

        // Transform backend data to match MusicProps interface
        const transformedBackendMusic: MusicProps[] = response.data.map(
          (music: MusicData) => ({
            musicId: music.token_id,
            musicTitle: music.title,
            musicCloseHour: generateRandomCloseHour(),
            musicArtist: music.artist,
            musicOnClick: () => {},
            musicUrl: music.audio_file_url,
            coverImageUrl: music.cover_image_url,
            genre: music.genre,
          })
        );

        // Merge: localStorage music first, then backend music
        const mergedMusic = [...transformedLocalMusic, ...transformedBackendMusic];
        setMusicList(mergedMusic.slice(0, 5)); // Limit to 5 songs
      } catch (error) {
        console.error("Failed to fetch music:", error);
        // Try to use localStorage music only
        const localMusic = getLocalMusic();
        if (localMusic.length > 0) {
          const transformedLocalMusic: MusicProps[] = localMusic.map((music) => ({
            musicId: parseInt(music.id.replace('local-', '')),
            musicTitle: music.title,
            musicCloseHour: generateRandomCloseHour(),
            musicArtist: music.artist,
            musicOnClick: () => {},
            musicUrl: music.audioFileUrl,
            coverImageUrl: music.coverImageUrl,
            genre: music.genre,
          }));
          setMusicList(transformedLocalMusic);
        }
        // Keep using dummy data if both fail
      }
    };

    fetchMusic();
  }, []);

  useEffect(() => {
    if (activeSong) {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(activeSong.musicUrl);
      audioRef.current = audio;

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("timeupdate", () => {
        setProgress(audio.currentTime);
      });

      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
      });

      audio.addEventListener("error", (e) => {
        console.error("Audio playback error:", e);
        console.error("Failed to load audio from:", activeSong.musicUrl);
        setIsPlaying(false);
      });

      audio.play().catch((error) => {
        console.error("Audio play failed:", error);
        setIsPlaying(false);
      });

      setIsPlaying(true);

      return () => {
        audio.pause();
        audio.removeAttribute("src");
      };
    }
  }, [activeSong]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  // Klik dari MusicPoolCard
  const handleTogglePlay = (music: MusicProps) => {
    setActiveSongId((prev) => (prev === music.musicId ? null : music.musicId));
    if (activeSong?.musicId === music.musicId) {
      // Toggle jika sama
      togglePlayPause();
    } else {
      setActiveSong(music);
    }
  };

  // Format detik → menit:detik
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Format closing hours to display
  const formatCloseTime = (hours: number) => {
    if (hours >= 24) {
      const days = hours / 24;
      return `${days} hari`;
    }
    return `${hours} jam`;
  };

  const handleCreateCampaign = (music: MusicProps) => {
    if (!isConnected) {
      alert("Mohon hubungkan dompet Anda untuk membuat kampanye");
      return;
    }
    setSelectedMusicForCampaign(music);
    setShowCampaignModal(true);
  };

  return (
    <>
      <section className="flex flex-col w-[75vw] gap-[1.111vw]">
        <div className="flex flex-row justify-between items-end">
          <p className="text-[1.667vw] text-[var(--color-emas-nusantara)] font-bold font-jakarta">{title}</p>
          <button
            onClick={() => {}}
            className="cursor-pointer text-[var(--color-krem-lontar)]/70 text-[0.833vw] font-jakarta hover:text-[var(--color-emas-nusantara)] transition-colors"
          >
            Lihat Semua
          </button>
        </div>
        <div className="w-full flex flex-row justify-center rounded-[1.042vw] bg-neutral-400 text-white"></div>
        <div className="flex flex-row gap-[2.667vw]">
          {musicList.map((music) => (
            <div
              onClick={music.musicOnClick}
              key={music.musicId}
              className="flex flex-col gap-[1.111vw]"
            >
              <MusicPoolCard
                isPlayingSong={activeSongId === music.musicId}
                onClickPlay={() => handleTogglePlay(music)}
                coverImageUrl={music.coverImageUrl}
              />
              <div className="cursor-pointer flex flex-col gap-[0.556vw]">
                <div className="flex flex-row justify-between text-start">
                  <div className="flex flex-col gap-[0.333vw]">
                    <p className="text-[var(--color-krem-lontar)] font-jakarta text-[1.111vw] font-[700]">
                      {music.musicTitle}
                    </p>
                    <p className="text-[var(--color-emas-nusantara)] font-jakarta text-[0.833vw] font-regular">
                      Ditutup: {formatCloseTime(music.musicCloseHour)}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveSong(music);
                      setIsProfileExpanded(true);
                    }}
                    className="cursor-pointer w-[1.667vw] aspect-[24/24] flex justify-center bg-[var(--color-coklat-jati)] rounded-[1.042vw] hover:bg-[var(--color-emas-nusantara)] transition-colors"
                  >
                    <RiArrowRightUpLine color="var(--color-krem-lontar)" size={24} />
                  </button>
                </div>

                {/* Create Funding Pool Button - Only for Musicians */}
                {showCampaignButton && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCreateCampaign(music);
                    }}
                    className="btn-primary-nusantara w-full text-white text-[0.833vw] font-semibold py-[0.444vw] px-[0.778vw] rounded-[0.444vw] transition-colors shadow-wayang"
                  >
                    Buat Pool Pendanaan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tampilkan Detail Artist */}
      {isProfileExpanded && activeSong && (
        <ArtistProfileExpanded
          songTitle={activeSong.musicTitle}
          artist={activeSong.musicArtist}
          coverImageUrl={activeSong.coverImageUrl}
          genre={activeSong.genre}
          onClose={() => setIsProfileExpanded(false)}
        />
      )}

      {/* Create Campaign Modal */}
      {showCampaignModal && selectedMusicForCampaign && (
        <CreateCampaignModal
          tokenId={selectedMusicForCampaign.musicId}
          musicTitle={selectedMusicForCampaign.musicTitle}
          onClose={() => {
            setShowCampaignModal(false);
            setSelectedMusicForCampaign(null);
          }}
          onSuccess={() => {
            // Refresh music list or show success message
            console.log("Campaign created successfully!");
          }}
        />
      )}

      {/* Tampilkan bar lagu di bawah layar */}
      {activeSong && (
        <div className="fixed z-[20] bottom-0 left-0 w-full aspect-[1440/96] bg-[var(--color-hitam-ebony)] border-t border-[var(--color-coklat-jati)] px-[2vw] flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="w-[18.472vw] flex flex-row gap-[1.111vw] items-center">
              <div className="w-[3.75vw] aspect-[1/1] bg-neutral-black-base"></div>
              <div className="flex flex-col text-white">
                <p className="text-[1vw] font-bold font-jakarta text-[var(--color-krem-lontar)]">{activeSong.musicTitle}</p>
                <p className="text-[0.8vw] text-[var(--color-emas-nusantara)] font-jakarta">
                  {activeSong.musicArtist}
                </p>
              </div>
            </div>
            <div className="w-[55.555vw] flex flex-col items-center gap-[0.222vw]">
              <div className="flex flex-row gap-[1.111vw] w- items-center">
                <FiSkipBack size={20} color={"var(--color-coklat-jati)"} />
                {isPlaying ? (
                  <button onClick={togglePlayPause} className="cursor-pointer">
                    <FaPauseCircle size={36} color={"var(--color-emas-nusantara)"} />
                  </button>
                ) : (
                  <button onClick={togglePlayPause} className="cursor-pointer">
                    <FaPlayCircle size={36} color={"var(--color-emas-nusantara)"} />
                  </button>
                )}
                <FiSkipForward size={20} color={"var(--color-coklat-jati)"} />
              </div>
              {/* Progress bar */}

              <div className="w-full flex flex-row items-center gap-[0.5vw]">
                <span className="text-[var(--color-krem-lontar)] text-[0.7vw] font-jakarta">
                  {formatTime(progress)}
                </span>
                <div className="relative w-full h-[0.4vw] bg-[var(--color-coklat-jati)]/30 rounded-full">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] rounded-full"
                    style={{ width: `${(progress / duration) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[var(--color-krem-lontar)] text-[0.7vw] font-jakarta">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-[1vw] items-center">
              <div className="text-white text-[0.9vw] w-[6vw] aspect-square bg-black"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPool;
