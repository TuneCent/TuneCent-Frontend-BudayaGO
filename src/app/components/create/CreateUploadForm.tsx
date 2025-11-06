"use client";
import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useMusicRegistry } from "@/app/hooks/useMusicRegistry";
import TransactionSuccessModal from "@/app/components/common/TransactionSuccessModal";
import { saveMusic, generateId } from "@/app/utils/localStorage";

export default function CreateUploadForm() {
  const { address, isConnected } = useAccount();
  const {
    registerMusic,
    isRegistering,
    isConfirming,
    isConfirmed,
    registerError,
    transactionHash,
  } = useMusicRegistry();

  const [creatorAddress, setCreatorAddress] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [bannerURL, setBannerURL] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [successData, setSuccessData] = useState<{
    title: string;
    artist: string;
    genre: string;
    audioUrl: string;
    bannerUrl: string | null;
  } | null>(null);

  // Update creator address when wallet connects
  useEffect(() => {
    if (address) {
      setCreatorAddress(address);
    }
  }, [address]);

  const handleCreatorAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatorAddress(event.target.value);
  };

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleArtist = (event: ChangeEvent<HTMLInputElement>) => {
    setArtist(event.target.value);
  };

  const handleGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleDuration = (event: ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      setAudioUrl(URL.createObjectURL(file)); // buat URL sementara untuk preview
    } else {
      alert("Mohon unggah file audio yang valid (MP3/WAV).");
    }
  };

  const handleBannerUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerURL(URL.createObjectURL(file));
    }
  };

  const handleCreateKarya = async () => {
    // Validation
    if (!isConnected) {
      alert("Mohon hubungkan dompet Anda terlebih dahulu");
      return;
    }

    if (!title || !artist || !audioFile) {
      alert("Mohon isi semua kolom yang diperlukan (Judul, Artis, dan File Audio)");
      return;
    }

    try {
      setIsUploading(true);

      // 1. Upload audio file to IPFS (you'll need to implement this)
      // For now, using a placeholder IPFS CID
      const audioArrayBuffer = await audioFile.arrayBuffer();

      // TODO: Upload to actual IPFS
      // const ipfsCID = await uploadToIPFS(audioFile, bannerFile, metadata);
      const ipfsCID = "QmPlaceholder" + Date.now(); // Placeholder

      // Save data before transaction
      setSuccessData({
        title,
        artist,
        genre,
        audioUrl,
        bannerUrl: bannerURL,
      });

      // 2. Register music on blockchain - this will open wallet modal
      registerMusic(ipfsCID, title, artist, audioArrayBuffer);
    } catch (error) {
      console.error("Error creating music:", error);
      // Only show error if user didn't reject in wallet
      if (error && typeof error === 'object' && 'code' in error && error.code !== 4001) {
        alert("Gagal mendaftarkan musik. Mohon coba lagi.");
      }
      setIsUploading(false);
    }
  };

  // Watch for transaction hash - shows modal 3 seconds after user signs in wallet
  useEffect(() => {
    if (transactionHash && successData && address) {
      // Save to localStorage
      const musicData = {
        id: generateId(),
        title: successData.title,
        artist: successData.artist,
        genre: successData.genre,
        description: description,
        duration: duration ? parseInt(duration.replace(':', '')) : 180, // Convert MM:SS to seconds or default
        coverImageUrl: successData.bannerUrl || '/assets/default-cover.png',
        audioFileUrl: successData.audioUrl,
        creatorAddress: address,
        txHash: transactionHash,
        createdAt: new Date().toISOString(),
      };

      saveMusic(musicData);
      console.log('Music saved to localStorage:', musicData);

      const timer = setTimeout(() => {
        setShowSuccessModal(true);
        setIsUploading(false);
      }, 3000); // 3 second delay

      return () => clearTimeout(timer);
    }
  }, [transactionHash, successData, address, description, duration]);

  // Show error message
  useEffect(() => {
    if (registerError) {
      alert(`Error: ${registerError.message}`);
      setIsUploading(false);
    }
  }, [registerError]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Reset form
    setTitle("");
    setArtist("");
    setGenre("");
    setDescription("");
    setDuration("");
    setAudioFile(null);
    setAudioUrl("");
    setBannerURL(null);
    setSuccessData(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-[2.222vw]">
      <div className="w-full grid grid-rows-3 grid-cols-2 gap-[1.667vw]">
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">
            Alamat Smart Contract
          </p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[var(--color-krem-lontar)] bg-transparent font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={creatorAddress}
                placeholder="0xxxx"
                onChange={handleCreatorAddress}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">Judul</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[var(--color-krem-lontar)] bg-transparent font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={title}
                placeholder="Contoh: Rayuan Pulau Kelapa"
                onChange={handleTitle}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">Artis</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[var(--color-krem-lontar)] bg-transparent font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={artist}
                placeholder="Nama Artis"
                onChange={handleArtist}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">Genre</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[var(--color-krem-lontar)] bg-transparent font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={genre}
                placeholder="Pop, Dangdut, Rock, dll"
                onChange={handleGenre}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">Deskripsi</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[var(--color-krem-lontar)] bg-transparent font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={description}
                placeholder="Ceritakan tentang karya Anda..."
                onChange={handleDescription}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">Durasi</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[var(--color-krem-lontar)] bg-transparent font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={duration}
                placeholder="Format (MM:SS)"
                onChange={handleDuration}
              />
            </div>
          </div>
        </div>
        {/* 🎧 Upload Song */}
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">
            Unggah Lagu Anda
          </p>
          <div className="flex flex-col gap-[0.556vw]">
            {/* Input file */}
            <label className="cursor-pointer flex flex-row items-center justify-between w-[37.5vw] border-[0.069vw] border-[var(--color-coklat-jati)] rounded-[0.556vw] bg-black p-[0.778vw] hover:bg-[var(--color-coklat-jati)]/10 transition-all">
              <span className="text-[var(--color-krem-lontar)] font-jakarta text-[1.111vw]">
                {audioFile ? audioFile.name : "Pilih File Audio (.mp3, .wav)"}
              </span>
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioUpload}
                className="hidden"
              />
            </label>

            {/* Preview */}
            {audioUrl && (
              <audio
                controls
                src={audioUrl}
                className="w-[37.5vw] rounded-[0.556vw] bg-neutral-800"
              />
            )}
          </div>
        </div>
        {/* Upload Banner */}
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-[var(--color-emas-nusantara)] text-[0.972vw] font-medium font-jakarta">
            Unggah Banner Musik
          </p>
          <div className="flex flex-col gap-[0.556vw]">
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerUpload}
              className="cursor-pointer w-[37.5vw] text-[var(--color-krem-lontar)] font-jakarta text-[0.972vw] border-[0.069vw] border-[var(--color-coklat-jati)] p-[0.778vw] rounded-[0.556vw] bg-black"
            />
            {bannerURL && (
              <div className="relative w-[37.5vw] h-[15vw] mt-[0.5vw]">
                <Image
                  src={bannerURL}
                  alt="Music Banner Preview"
                  fill
                  className="object-cover rounded-[0.556vw] border-[0.056vw] border-white"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleCreateKarya}
        disabled={isRegistering || isConfirming || isUploading || !isConnected}
        className="btn-primary-nusantara cursor-pointer w-[37.5vw] flex flex-row aspect-[408/36] justify-center items-center rounded-[0.556vw] disabled:opacity-50 disabled:cursor-not-allowed shadow-wayang"
      >
        <p className="text-[0.972vw] text-white font-jakarta font-semibold">
          {isUploading || isRegistering
            ? "Mengunggah..."
            : isConfirming
            ? "Mengkonfirmasi..."
            : !isConnected
            ? "Hubungkan Dompet"
            : "Buat Karya"}
        </p>
      </button>

      {transactionHash && (
        <p className="text-[var(--color-emas-nusantara)] text-[0.833vw] font-jakarta">
          Hash Transaksi: {transactionHash}
        </p>
      )}

      <TransactionSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        transactionHash={transactionHash}
        title="Musik Berhasil Dibuat!"
      >
        <div className="space-y-[1.111vw]">
          <div className="bg-black border border-[var(--color-coklat-jati)] rounded-[0.556vw] p-[1.111vw]">
            <h3 className="font-semibold font-jakarta text-[var(--color-emas-nusantara)] text-[1.111vw] mb-[0.833vw]">Detail Musik</h3>
            <div className="space-y-[0.556vw]">
              <div className="flex justify-between">
                <span className="text-[var(--color-krem-lontar)]/70 text-[0.833vw] font-jakarta">Judul:</span>
                <span className="font-medium text-[var(--color-krem-lontar)] text-[0.833vw] font-jakarta">{successData?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-krem-lontar)]/70 text-[0.833vw] font-jakarta">Artis:</span>
                <span className="font-medium text-[var(--color-krem-lontar)] text-[0.833vw] font-jakarta">{successData?.artist}</span>
              </div>
              {successData?.genre && (
                <div className="flex justify-between">
                  <span className="text-[var(--color-krem-lontar)]/70 text-[0.833vw] font-jakarta">Genre:</span>
                  <span className="font-medium text-[var(--color-krem-lontar)] text-[0.833vw] font-jakarta">{successData?.genre}</span>
                </div>
              )}
            </div>
          </div>

          {successData?.audioUrl && (
            <div>
              <p className="text-[0.833vw] text-[var(--color-emas-nusantara)] font-jakarta mb-[0.556vw]">Preview:</p>
              <audio
                controls
                src={successData.audioUrl}
                className="w-full rounded-[0.556vw]"
              />
            </div>
          )}

          {successData?.bannerUrl && (
            <div className="relative w-full h-[8.889vw]">
              <Image
                src={successData.bannerUrl}
                alt="Music Banner"
                fill
                className="object-cover rounded-[0.556vw] border border-white-darker"
                unoptimized
              />
            </div>
          )}
        </div>
      </TransactionSuccessModal>
    </div>
  );
}
