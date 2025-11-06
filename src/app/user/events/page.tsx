"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Video, Users, Award } from "react-feather";

interface Event {
  id: number;
  title: string;
  artist: string;
  type: "Live Concert" | "Meet & Greet" | "Workshop" | "Album Launch";
  date: string;
  time: string;
  price: number;
  ticketsAvailable: number;
  totalTickets: number;
  thumbnail: string;
  isLive?: boolean;
  poaNFT?: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Konser Virtual Nusantara Fusion",
    artist: "Perunggu & Ismail Marzuki",
    type: "Live Concert",
    date: "2024-02-15",
    time: "19:00 WIB",
    price: 50000,
    ticketsAvailable: 150,
    totalTickets: 500,
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    isLive: false,
    poaNFT: true,
  },
  {
    id: 2,
    title: "Meet & Greet Exclusive - Tenxi",
    artist: "Tenxi",
    type: "Meet & Greet",
    date: "2024-02-10",
    time: "15:00 WIB",
    price: 100000,
    ticketsAvailable: 15,
    totalTickets: 20,
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    isLive: false,
    poaNFT: true,
  },
  {
    id: 3,
    title: "Workshop Gamelan Modern",
    artist: "Gesang Legacy",
    type: "Workshop",
    date: "2024-02-20",
    time: "14:00 WIB",
    price: 75000,
    ticketsAvailable: 30,
    totalTickets: 50,
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0201b9750a33d771645d7f043a",
    isLive: false,
    poaNFT: false,
  },
  {
    id: 4,
    title: "Album Launch - Rayuan Pulau Kelapa Reimagined",
    artist: "Ismail Marzuki",
    type: "Album Launch",
    date: "2024-02-25",
    time: "20:00 WIB",
    price: 0,
    ticketsAvailable: 1000,
    totalTickets: 1000,
    thumbnail: "https://i.scdn.co/image/ab67616d00001e024d265eb3c717ab45470fdc8c",
    isLive: false,
    poaNFT: true,
  },
];

export default function EventsPage() {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const registerForEvent = (event: Event) => {
    if (!registeredEvents.includes(event.id)) {
      setRegisteredEvents([...registeredEvents, event.id]);
      alert(
        `Berhasil mendaftar untuk ${event.title}!\n\n${
          event.poaNFT
            ? "🎁 Anda akan mendapatkan Proof of Attendance NFT setelah menghadiri event ini!"
            : "Sampai jumpa di event!"
        }\n\n(Prototype Mode - No Payment Required)`
      );
    } else {
      alert("Anda sudah terdaftar untuk event ini");
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Live Concert":
        return "bg-[var(--color-merah-kebangsaan)]";
      case "Meet & Greet":
        return "bg-[var(--color-emas-nusantara)]";
      case "Workshop":
        return "bg-[var(--color-coklat-jati)]";
      case "Album Launch":
        return "bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)]";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="w-full flex flex-col bg-black gap-[2.222vw] relative">
      {/* Header */}
      <div className="flex flex-col gap-[0.556vw]">
        <h1 className="font-jakarta font-bold text-[2.222vw] text-[var(--color-emas-nusantara)]">
          Virtual Events
        </h1>
        <p className="font-jakarta text-[1.111vw] text-[var(--color-krem-lontar)]">
          Terhubung langsung dengan artis favorit Anda melalui konser virtual,
          meet & greet, dan workshop
        </p>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Live Streaming Section */}
      <div className="bg-neutral-black-base rounded-[1.111vw] overflow-hidden border-2 border-[var(--color-merah-kebangsaan)]">
        <div className="relative aspect-video bg-gradient-to-br from-[var(--color-coklat-jati)] to-black flex items-center justify-center">
          {/* Live Stream Placeholder */}
          <div className="text-center">
            <Video size={64} className="text-[var(--color-krem-lontar)]/50 mx-auto mb-4" />
            <p className="font-jakarta text-[1.389vw] font-bold text-white">
              No Live Stream Available
            </p>
            <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70 mt-2">
              Check back soon for upcoming live events
            </p>
          </div>
          {/* Live Badge (when active) */}
          {/* <div className="absolute top-4 left-4 bg-[var(--color-merah-kebangsaan)] text-white px-4 py-2 rounded-full font-jakarta font-bold text-sm flex items-center gap-2">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            LIVE
          </div> */}
        </div>
        <div className="p-[1.667vw]">
          <h3 className="font-jakarta font-bold text-[1.389vw] text-white">
            Live Streaming Platform
          </h3>
          <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70 mt-[0.556vw]">
            Nikmati pengalaman konser virtual berkualitas tinggi dengan
            interaksi real-time. Stream akan muncul di sini saat event
            berlangsung.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="flex flex-col gap-[1.111vw]">
        <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-2 gap-[1.667vw]">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-neutral-black-base rounded-[1.111vw] overflow-hidden border border-[var(--color-coklat-jati)] hover:border-[var(--color-emas-nusantara)] transition-all"
            >
              {/* Event Image */}
              <div className="relative aspect-video">
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute top-2 right-2 ${getEventTypeColor(
                    event.type
                  )} text-white px-[0.833vw] py-[0.278vw] rounded-full font-jakarta text-[0.694vw] font-bold`}
                >
                  {event.type}
                </div>
                {event.poaNFT && (
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white px-[0.833vw] py-[0.278vw] rounded-full font-jakarta text-[0.694vw] font-bold flex items-center gap-[0.278vw]">
                    <Award size={12} className="text-[var(--color-emas-nusantara)]" />
                    PoA NFT
                  </div>
                )}
              </div>

              {/* Event Info */}
              <div className="p-[1.111vw] flex flex-col gap-[0.833vw]">
                <div>
                  <h3 className="font-jakarta font-bold text-[1.111vw] text-white">
                    {event.title}
                  </h3>
                  <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                    {event.artist}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="flex flex-col gap-[0.278vw]">
                  <div className="flex items-center gap-[0.556vw]">
                    <Calendar size={16} className="text-[var(--color-emas-nusantara)]" />
                    <span className="font-jakarta text-[0.833vw] text-white">
                      {new Date(event.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.556vw]">
                    <Clock size={16} className="text-[var(--color-emas-nusantara)]" />
                    <span className="font-jakarta text-[0.833vw] text-white">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Tickets Available */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[0.556vw]">
                    <Users size={16} className="text-[var(--color-krem-lontar)]" />
                    <span className="font-jakarta text-[0.722vw] text-[var(--color-krem-lontar)]/70">
                      {event.ticketsAvailable} / {event.totalTickets} tiket
                      tersedia
                    </span>
                  </div>
                </div>

                {/* Price & Register Button */}
                <div className="flex flex-row justify-between items-center mt-[0.556vw] pt-[0.833vw] border-t border-[var(--color-coklat-jati)]">
                  <div>
                    <p className="font-jakarta text-[0.694vw] text-[var(--color-krem-lontar)]/50">
                      {event.price === 0 ? "Gratis" : "Harga Tiket"}
                    </p>
                    <p className="font-jakarta font-bold text-[1.389vw] text-[var(--color-emas-nusantara)]">
                      {event.price === 0
                        ? "FREE"
                        : `Rp ${(event.price / 1000).toFixed(0)}k`}
                    </p>
                  </div>
                  <button
                    onClick={() => registerForEvent(event)}
                    disabled={registeredEvents.includes(event.id)}
                    className={`px-[1.667vw] py-[0.556vw] rounded-[0.556vw] font-jakarta text-[0.833vw] font-bold transition-all ${
                      registeredEvents.includes(event.id)
                        ? "bg-[var(--color-coklat-jati)]/50 text-[var(--color-krem-lontar)]/50 cursor-not-allowed"
                        : "bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white hover:scale-105"
                    }`}
                  >
                    {registeredEvents.includes(event.id)
                      ? "Terdaftar"
                      : "Daftar"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PoA NFT Info Section */}
      <div className="bg-gradient-to-r from-[var(--color-coklat-jati)] to-[var(--color-merah-kebangsaan)]/30 rounded-[1.111vw] p-[1.667vw] border border-[var(--color-emas-nusantara)]">
        <div className="flex flex-row items-center gap-[1.111vw]">
          <div className="bg-[var(--color-emas-nusantara)] rounded-full p-[1.111vw]">
            <Award size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-jakarta font-bold text-[1.389vw] text-white mb-[0.556vw]">
              Proof of Attendance NFT
            </h3>
            <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
              Dapatkan NFT eksklusif sebagai bukti kehadiran Anda di event
              virtual! NFT ini dapat Anda koleksi dan jual kembali di
              marketplace.
            </p>
          </div>
        </div>
      </div>

      {/* My Registered Events */}
      {registeredEvents.length > 0 && (
        <>
          <div className="divider-gorga w-full my-2" />
          <div className="flex flex-col gap-[1.111vw]">
            <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
              Event Saya
            </h2>
            <div className="bg-neutral-black-base rounded-[1.111vw] p-[1.667vw]">
              <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
                Anda terdaftar untuk {registeredEvents.length} event.
                Notifikasi akan dikirim 1 jam sebelum event dimulai.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
