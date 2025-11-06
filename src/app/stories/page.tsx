"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, Video, Music, Award, Play } from "react-feather";

interface Story {
  id: number;
  title: string;
  type: "Article" | "Video Tutorial" | "Interview" | "Documentation";
  category: "Traditional Instrument" | "Regional Song" | "Music History" | "Cultural Expert";
  thumbnail: string;
  duration?: string;
  author: string;
  excerpt: string;
  publishDate: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "Sejarah Gamelan: Warisan Musik Nusantara",
    type: "Article",
    category: "Music History",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    author: "Dr. Sumarsam",
    excerpt:
      "Gamelan adalah ansambel musik tradisional Jawa, Sunda, dan Bali yang terdiri dari instrumen perkusi seperti gong, kenong, dan saron. Musik gamelan memiliki peran penting dalam upacara adat dan pertunjukan wayang kulit.",
    publishDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Tutorial Bermain Angklung untuk Pemula",
    type: "Video Tutorial",
    category: "Traditional Instrument",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    duration: "15:30",
    author: "Saung Angklung Udjo",
    excerpt:
      "Pelajari teknik dasar memainkan angklung, alat musik tradisional Sunda yang terbuat dari bambu. Video ini mencakup teknik memegang, menggetarkan, dan bermain dalam ansambel.",
    publishDate: "2024-01-20",
  },
  {
    id: 3,
    title: "Wawancara dengan Maestro Keroncong",
    type: "Interview",
    category: "Cultural Expert",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0201b9750a33d771645d7f043a",
    duration: "45:00",
    author: "Waldjinah",
    excerpt:
      "Percakapan mendalam dengan Waldjinah, penyanyi keroncong legendaris, tentang perjalanan karirnya, perkembangan musik keroncong, dan pentingnya pelestarian musik tradisional.",
    publishDate: "2024-01-10",
  },
  {
    id: 4,
    title: "Koleksi Lagu Daerah: Dari Sabang sampai Merauke",
    type: "Documentation",
    category: "Regional Song",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e024d265eb3c717ab45470fdc8c",
    author: "TuneCent Cultural Team",
    excerpt:
      "Dokumentasi lengkap lagu-lagu daerah dari 34 provinsi di Indonesia, termasuk lirik, notasi musik, dan makna historis di balik setiap lagu. Dari 'Ampar-ampar Pisang' hingga 'Yamko Rambe Yamko'.",
    publishDate: "2024-01-25",
  },
  {
    id: 5,
    title: "Filosofi Musik Tradisional Nusantara",
    type: "Article",
    category: "Music History",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    author: "Prof. R.M. Soedarsono",
    excerpt:
      "Eksplorasi mendalam tentang filosofi dan nilai-nilai yang terkandung dalam musik tradisional Indonesia. Musik bukan hanya hiburan, tetapi juga medium spiritual dan sosial.",
    publishDate: "2024-01-05",
  },
  {
    id: 6,
    title: "Cara Membuat Alat Musik Sasando",
    type: "Video Tutorial",
    category: "Traditional Instrument",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    duration: "30:00",
    author: "Pengrajin NTT",
    excerpt:
      "Proses pembuatan sasando, alat musik petik khas Nusa Tenggara Timur yang dibuat dari daun lontar. Video dokumenter tentang kerajinan tradisional yang hampir punah.",
    publishDate: "2024-01-18",
  },
];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const categories = [
    "All",
    "Traditional Instrument",
    "Regional Song",
    "Music History",
    "Cultural Expert",
  ];
  const types = ["All", "Article", "Video Tutorial", "Interview", "Documentation"];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Article":
        return <BookOpen size={16} className="text-[var(--color-emas-nusantara)]" />;
      case "Video Tutorial":
        return <Video size={16} className="text-[var(--color-emas-nusantara)]" />;
      case "Interview":
        return <Award size={16} className="text-[var(--color-emas-nusantara)]" />;
      case "Documentation":
        return <Music size={16} className="text-[var(--color-emas-nusantara)]" />;
      default:
        return null;
    }
  };

  const filteredStories = stories.filter((story) => {
    const categoryMatch =
      selectedCategory === "All" || story.category === selectedCategory;
    const typeMatch = selectedType === "All" || story.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <section className="w-full flex flex-col bg-black gap-[2.222vw] relative">
      {/* Header */}
      <div className="flex flex-col gap-[0.556vw]">
        <h1 className="font-jakarta font-bold text-[2.222vw] text-[var(--color-emas-nusantara)]">
          Cultural Storytelling
        </h1>
        <p className="font-jakarta text-[1.111vw] text-[var(--color-krem-lontar)]">
          Jelajahi kekayaan warisan musik tradisional Indonesia melalui artikel,
          video, dan dokumentasi edukatif
        </p>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Featured Story */}
      <div className="bg-gradient-to-r from-[var(--color-coklat-jati)] to-[var(--color-merah-kebangsaan)]/30 rounded-[1.111vw] overflow-hidden border-2 border-[var(--color-emas-nusantara)]">
        <div className="grid grid-cols-2 gap-[1.667vw]">
          <div className="relative aspect-video">
            <Image
              src={stories[0].thumbnail}
              alt={stories[0].title}
              fill
              className="object-cover"
            />
            <button 
              aria-label="Putar video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
            >
              <div className="bg-[var(--color-emas-nusantara)] rounded-full p-[1.111vw]">
                <Play size={32} className="text-white" />
              </div>
            </button>
          </div>
          <div className="p-[1.667vw] flex flex-col justify-center gap-[0.833vw]">
            <div className="flex items-center gap-[0.556vw]">
              {getTypeIcon(stories[0].type)}
              <span className="font-jakarta text-[0.833vw] text-[var(--color-emas-nusantara)] font-bold">
                Featured Story
              </span>
            </div>
            <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
              {stories[0].title}
            </h2>
            <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
              {stories[0].excerpt}
            </p>
            <div className="flex items-center gap-[1.111vw] mt-[0.556vw]">
              <span className="font-jakarta text-[0.722vw] text-[var(--color-krem-lontar)]/70">
                By {stories[0].author}
              </span>
              <span className="font-jakarta text-[0.722vw] text-[var(--color-krem-lontar)]/70">
                {new Date(stories[0].publishDate).toLocaleDateString("id-ID")}
              </span>
            </div>
            <button className="mt-[0.833vw] bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white px-[1.667vw] py-[0.833vw] rounded-[0.556vw] font-jakarta text-[0.833vw] font-bold hover:scale-105 transition-transform w-fit">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-[0.833vw]">
        <div className="flex flex-col gap-[0.556vw]">
          <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70 font-medium">
            Kategori
          </p>
          <div className="flex flex-row gap-[0.833vw]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-[1.111vw] py-[0.556vw] rounded-full font-jakarta text-[0.833vw] font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white"
                    : "bg-[var(--color-coklat-jati)]/30 text-[var(--color-krem-lontar)] hover:bg-[var(--color-coklat-jati)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.556vw]">
          <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70 font-medium">
            Tipe Konten
          </p>
          <div className="flex flex-row gap-[0.833vw]">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-[1.111vw] py-[0.556vw] rounded-full font-jakarta text-[0.833vw] font-medium transition-all ${
                  selectedType === type
                    ? "bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white"
                    : "bg-[var(--color-coklat-jati)]/30 text-[var(--color-krem-lontar)] hover:bg-[var(--color-coklat-jati)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-3 gap-[1.667vw]">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="bg-neutral-black-base rounded-[1.111vw] overflow-hidden border border-[var(--color-coklat-jati)] hover:border-[var(--color-emas-nusantara)] transition-all hover:scale-105"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video">
              <Image
                src={story.thumbnail}
                alt={story.title}
                fill
                className="object-cover"
              />
              {story.duration && (
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white px-[0.556vw] py-[0.278vw] rounded font-jakarta text-[0.694vw] font-bold">
                  {story.duration}
                </div>
              )}
              {story.type === "Video Tutorial" && (
                <button 
                  aria-label="Putar video"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors"
                >
                  <div className="bg-[var(--color-emas-nusantara)] rounded-full p-[0.556vw]">
                    <Play size={24} className="text-white" />
                  </div>
                </button>
              )}
            </div>

            {/* Content */}
            <div className="p-[1.111vw] flex flex-col gap-[0.556vw]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[0.278vw]">
                  {getTypeIcon(story.type)}
                  <span className="font-jakarta text-[0.694vw] text-[var(--color-emas-nusantara)] font-bold">
                    {story.type}
                  </span>
                </div>
                <span className="font-jakarta text-[0.694vw] text-[var(--color-krem-lontar)]/50">
                  {story.category}
                </span>
              </div>

              <h3 className="font-jakarta font-bold text-[1.111vw] text-white line-clamp-2">
                {story.title}
              </h3>

              <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70 line-clamp-3">
                {story.excerpt}
              </p>

              <div className="flex items-center justify-between mt-[0.556vw] pt-[0.556vw] border-t border-[var(--color-coklat-jati)]">
                <span className="font-jakarta text-[0.694vw] text-[var(--color-krem-lontar)]/50">
                  {story.author}
                </span>
                <span className="font-jakarta text-[0.694vw] text-[var(--color-krem-lontar)]/50">
                  {new Date(story.publishDate).toLocaleDateString("id-ID")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Educational Info Banner */}
      <div className="divider-gorga w-full my-2" />
      <div className="bg-neutral-black-base rounded-[1.111vw] p-[1.667vw] border border-[var(--color-emas-nusantara)]">
        <div className="flex flex-row items-center gap-[1.111vw]">
          <div className="bg-[var(--color-emas-nusantara)] rounded-full p-[1.111vw]">
            <BookOpen size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-jakarta font-bold text-[1.389vw] text-white mb-[0.556vw]">
              Lestarikan Budaya, Bangun Masa Depan
            </h3>
            <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
              Setiap artikel, video, dan dokumentasi yang Anda baca membantu
              melestarikan warisan musik tradisional Indonesia untuk generasi
              mendatang. Mari belajar bersama!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
