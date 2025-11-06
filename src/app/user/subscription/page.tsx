"use client";

import { useState } from "react";
import { Check, Music, Download, Video, Headphones } from "react-feather";

interface SubscriptionPlan {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Basic",
    price: 29000,
    period: "bulan",
    features: [
      "Ad-free listening",
      "Standard quality audio (320kbps)",
      "Akses exclusive content",
      "Download untuk offline",
      "Support email standar",
    ],
  },
  {
    name: "Pro",
    price: 59000,
    period: "bulan",
    popular: true,
    features: [
      "Semua benefit Basic +",
      "Lossless audio (FLAC)",
      "Early access new releases (7 hari)",
      "Diskon 10% merchandise",
      "Monthly exclusive live stream",
      "Priority customer support",
    ],
  },
  {
    name: "Premium",
    price: 99000,
    period: "bulan",
    features: [
      "Semua benefit Pro +",
      "Virtual meet & greet 1x/bulan",
      "Personalized video greeting",
      "Exclusive merchandise bundle",
      "Behind-the-scenes content",
      "Dedicated account manager",
    ],
  },
];

const exclusiveContent = [
  {
    id: 1,
    title: "Behind The Scenes: Recording 'Rayuan Pulau Kelapa'",
    type: "Video",
    duration: "15:30",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    requiredPlan: "Basic",
  },
  {
    id: 2,
    title: "Unreleased Demo: Nusantara Symphony",
    type: "Audio",
    duration: "4:25",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e024d265eb3c717ab45470fdc8c",
    requiredPlan: "Pro",
  },
  {
    id: 3,
    title: "Masterclass: Gamelan Modern Techniques",
    type: "Workshop",
    duration: "45:00",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    requiredPlan: "Premium",
  },
];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planName: string) => {
    setSelectedPlan(planName);
    // In production: redirect to payment gateway
    alert(`Berlangganan ${planName} berhasil! (Prototype Mode - No Payment Required)`);
  };

  return (
    <section className="w-full flex flex-col bg-black gap-[2.222vw] relative">
      {/* Header */}
      <div className="flex flex-col gap-[0.556vw]">
        <h1 className="font-jakarta font-bold text-[2.222vw] text-[var(--color-emas-nusantara)]">
          Premium Subscription
        </h1>
        <p className="font-jakarta text-[1.111vw] text-[var(--color-krem-lontar)]">
          Dapatkan akses unlimited ke konten eksklusif dan fitur premium
        </p>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Subscription Plans */}
      <div className="grid grid-cols-3 gap-[1.667vw]">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-neutral-black-base rounded-[1.111vw] p-[2.222vw] border-2 ${
              plan.popular
                ? "border-[var(--color-emas-nusantara)]"
                : "border-[var(--color-coklat-jati)]"
            } ${selectedPlan === plan.name ? "ring-2 ring-[var(--color-emas-nusantara)]" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white px-[1.111vw] py-[0.278vw] rounded-bl-[0.556vw] rounded-tr-[1.111vw] font-jakarta text-[0.722vw] font-bold">
                PALING POPULER
              </div>
            )}

            <div className="flex flex-col gap-[1.667vw]">
              {/* Plan Name & Price */}
              <div className="flex flex-col gap-[0.556vw]">
                <h3 className="font-jakarta font-bold text-[1.667vw] text-white">
                  {plan.name}
                </h3>
                <div className="flex flex-row items-end gap-[0.278vw]">
                  <span className="font-jakarta font-bold text-[2.778vw] text-[var(--color-emas-nusantara)]">
                    Rp {(plan.price / 1000).toFixed(0)}k
                  </span>
                  <span className="font-jakarta text-[0.972vw] text-[var(--color-krem-lontar)]/70 mb-[0.556vw]">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-[0.833vw]">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row items-start gap-[0.556vw]"
                  >
                    <Check
                      size={20}
                      className="text-[var(--color-emas-nusantara)] flex-shrink-0 mt-[0.111vw]"
                    />
                    <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Subscribe Button */}
              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-[0.833vw] rounded-[0.556vw] font-jakarta font-bold text-[0.972vw] transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white hover:scale-105"
                    : "bg-[var(--color-coklat-jati)] text-white hover:bg-[var(--color-emas-nusantara)]"
                }`}
              >
                {selectedPlan === plan.name ? "Berlangganan Aktif" : "Berlangganan Sekarang"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Exclusive Content Preview */}
      <div className="flex flex-col gap-[1.111vw]">
        <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
          Konten Eksklusif Premium
        </h2>
        <div className="grid grid-cols-3 gap-[1.111vw]">
          {exclusiveContent.map((content) => (
            <div
              key={content.id}
              className="bg-neutral-black-base rounded-[0.833vw] overflow-hidden border border-[var(--color-coklat-jati)] hover:border-[var(--color-emas-nusantara)] transition-colors cursor-pointer"
            >
              <div className="relative aspect-video">
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-[0.833vw]">
                  <div className="flex flex-row items-center gap-[0.556vw] mb-[0.278vw]">
                    {content.type === "Video" && <Video size={16} className="text-white" />}
                    {content.type === "Audio" && <Music size={16} className="text-white" />}
                    {content.type === "Workshop" && <Headphones size={16} className="text-white" />}
                    <span className="font-jakarta text-[0.694vw] text-white">
                      {content.type}
                    </span>
                    <span className="font-jakarta text-[0.694vw] text-[var(--color-krem-lontar)]/70">
                      {content.duration}
                    </span>
                  </div>
                  <h3 className="font-jakarta font-bold text-[0.833vw] text-white line-clamp-2">
                    {content.title}
                  </h3>
                </div>
              </div>
              <div className="p-[0.833vw] flex flex-row justify-between items-center">
                <span className="font-jakarta text-[0.722vw] text-[var(--color-emas-nusantara)]">
                  Requires: {content.requiredPlan}
                </span>
                <Download size={16} className="text-[var(--color-krem-lontar)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* FAQ Section */}
      <div className="flex flex-col gap-[1.111vw]">
        <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
          Pertanyaan Umum
        </h2>
        <div className="bg-neutral-black-base rounded-[1.111vw] p-[1.667vw] border border-[var(--color-coklat-jati)]">
          <div className="flex flex-col gap-[1.111vw]">
            <div>
              <h3 className="font-jakarta font-bold text-[1.111vw] text-[var(--color-emas-nusantara)] mb-[0.444vw]">
                Bagaimana cara berlangganan?
              </h3>
              <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
                Pilih paket yang sesuai, klik tombol &quot;Berlangganan Sekarang&quot;, dan ikuti proses pembayaran. Langganan akan aktif segera setelah pembayaran dikonfirmasi.
              </p>
            </div>
            <div>
              <h3 className="font-jakarta font-bold text-[1.111vw] text-[var(--color-emas-nusantara)] mb-[0.444vw]">
                Apakah saya bisa upgrade/downgrade paket?
              </h3>
              <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
                Ya! Anda bisa upgrade atau downgrade paket kapan saja. Perubahan akan berlaku di periode billing berikutnya.
              </p>
            </div>
            <div>
              <h3 className="font-jakarta font-bold text-[1.111vw] text-[var(--color-emas-nusantara)] mb-[0.444vw]">
                Bagaimana cara membatalkan langganan?
              </h3>
              <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]">
                Anda bisa membatalkan langganan kapan saja melalui pengaturan akun. Akses premium akan tetap aktif hingga akhir periode billing Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
