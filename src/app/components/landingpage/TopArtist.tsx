"use client";
import { useEffect, useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { getTopArtists, ArtistLeaderboardData } from "@/app/services/musicApi";
import Image from "next/image";

interface ArtistProps {
  artistId: number;
  artistProfileIcon: string;
  artistName: string;
  artistDesc: string;
}

const DummyArtist: ArtistProps[] = [
  {
    artistId: 1,
    artistProfileIcon: "",
    artistName: "Gesang",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 2,
    artistProfileIcon: "",
    artistName: "Nadhira Rafa",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 3,
    artistProfileIcon: "",
    artistName: "Ifan Su'ady",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 4,
    artistProfileIcon: "",
    artistName: "Irma",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 5,
    artistProfileIcon: "",
    artistName: "Daffa",
    artistDesc: "Artist, Creator",
  },
];

// Array of real musician images from public sources
const musicianImages = [
  "https://i.scdn.co/image/ab67616d00001e02a03827c41b0c4dcc1305db5c", // Artist 1
  "https://i.scdn.co/image/ab67616d00001e023f5115bb981ee2800aef31dd", // Artist 2
  "https://i.scdn.co/image/ab67616d00001e02741fec8b09ab1fb2568c00fc", // Artist 3
  "https://i.scdn.co/image/ab67616d00001e0220413ecbfd68590bb77b2cf6", // Artist 4
  "https://i.scdn.co/image/ab67616d00001e029addd693c9e619b6f9a98b3a", // Artist 5
];

const TopArtist = () => {
  const [artists, setArtists] = useState<ArtistProps[]>(DummyArtist);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await getTopArtists({ limit: 5 });

        if (response.leaderboard.length > 0) {
          // Transform backend data to ArtistProps
          const transformedArtists: ArtistProps[] = response.leaderboard.map(
            (artist: ArtistLeaderboardData, index: number) => ({
              artistId: artist.rank,
              artistProfileIcon: musicianImages[index % musicianImages.length],
              artistName: artist.display_name,
              artistDesc: `${artist.tier} • ${artist.total_works} works`,
            })
          );
          setArtists(transformedArtists);
        } else {
          // Use dummy data with real images if no backend data
          const dummyWithImages = DummyArtist.map((artist, index) => ({
            ...artist,
            artistProfileIcon: musicianImages[index % musicianImages.length],
          }));
          setArtists(dummyWithImages);
        }
      } catch (error) {
        console.error("Failed to fetch top artists:", error);
        // Use dummy data with real images on error
        const dummyWithImages = DummyArtist.map((artist, index) => ({
          ...artist,
          artistProfileIcon: musicianImages[index % musicianImages.length],
        }));
        setArtists(dummyWithImages);
      }
    };

    fetchArtists();
  }, []);

  return (
    <section className="flex flex-col w-[75vw] gap-[1.111vw]">
      <div className="flex flex-row justify-between items-end">
        <p className="text-[1.667vw] text-[var(--color-emas-nusantara)] font-bold font-jakarta">Top Artis</p>
        <button
          onClick={() => {}}
          className="cursor-pointer text-[var(--color-krem-lontar)]/70 text-[0.833vw] font-jakarta hover:text-[var(--color-emas-nusantara)] transition-colors"
        >
          Lihat Semua
        </button>
      </div>
      <div className="w-full flex flex-row justify-center rounded-[1.042vw] bg-neutral-400 text-white"></div>
      <div className="flex flex-row gap-[2.667vw]">
        {artists.map((artist) => (
          <button
            onClick={() => {}}
            key={artist.artistId}
            className="cursor-pointer flex flex-col gap-[1.111vw]"
          >
            <div className="flex flex-col w-[13.333vw] aspect-[192/192]">
              <div className="bg-[#D9D9D9] aspect-[192/192] flex flex-row-reverse p-[0.111vw] rounded-full overflow-hidden relative">
                {artist.artistProfileIcon && (
                  <Image
                    src={artist.artistProfileIcon}
                    alt={artist.artistName}
                    fill
                    className="object-cover rounded-full"
                    unoptimized
                  />
                )}
                <div className="flex flex-row gap-[0.333vw] p-[0.556vw] relative z-10"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-col gap-[0.333vw] text-start">
                <p className="text-[var(--color-krem-lontar)] font-jakarta text-[1.111vw] font-bold">
                  {artist.artistName}
                </p>
                <p className="text-[var(--color-emas-nusantara)] font-jakarta text-[0.833vw] font-regular">
                  {artist.artistDesc}
                </p>
              </div>
              <div className="cursor-pointer w-[2.5vw] h-[2.5vw] min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-[var(--color-coklat-jati)] hover:bg-[var(--color-emas-nusantara)] transition-transform hover:scale-105 shadow-wayang">
                <RiArrowRightUpLine color="var(--color-krem-lontar)" size={20} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TopArtist;
