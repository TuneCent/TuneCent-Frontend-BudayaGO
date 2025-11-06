"use client";

import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { getUserProgressById } from "@/app/utils/localStorage";
import { Award, Star, TrendingUp } from "react-feather";

interface MembershipTier {
  name: string;
  color: string;
  benefits: string[];
  requiredInvestments: number;
}

const membershipTiers: MembershipTier[] = [
  {
    name: "Bronze",
    color: "#CD7F32",
    benefits: [
      "Akses forum community",
      "Badge Bronze member",
      "Notifikasi update artis",
    ],
    requiredInvestments: 0,
  },
  {
    name: "Silver",
    color: "#C0C0C0",
    benefits: [
      "Semua benefit Bronze +",
      "Konten eksklusif behind-the-scenes",
      "Voting rights di polls",
      "Badge Silver member",
    ],
    requiredInvestments: 5,
  },
  {
    name: "Gold",
    color: "#FFD700",
    benefits: [
      "Semua benefit Silver +",
      "Early access new releases (7 hari)",
      "Diskon 10% merchandise",
      "Monthly live stream eksklusif",
      "Badge Gold member",
    ],
    requiredInvestments: 10,
  },
  {
    name: "Diamond",
    color: "#B9F2FF",
    benefits: [
      "Semua benefit Gold +",
      "Virtual meet & greet 1x/bulan",
      "Personalized video greeting",
      "Exclusive merchandise bundle",
      "Highest voting weight",
      "Badge Diamond member",
    ],
    requiredInvestments: 20,
  },
];

const topFans = [
  {
    rank: 1,
    name: "Budi Santoso",
    tier: "Diamond",
    points: 15420,
    investments: 28,
  },
  {
    rank: 2,
    name: "Siti Nurhaliza",
    tier: "Diamond",
    points: 12350,
    investments: 24,
  },
  {
    rank: 3,
    name: "Ahmad Dhani",
    tier: "Gold",
    points: 9840,
    investments: 15,
  },
  {
    rank: 4,
    name: "Dewi Lestari",
    tier: "Gold",
    points: 8650,
    investments: 13,
  },
  {
    rank: 5,
    name: "Reza Artamevia",
    tier: "Silver",
    points: 6720,
    investments: 9,
  },
];

const communityPolls = [
  {
    id: 1,
    question: "Pilih desain album cover untuk single terbaru 'Nusantara Jaya'",
    options: [
      { id: 1, text: "Desain A - Batik Modern", votes: 245 },
      { id: 2, text: "Desain B - Wayang Kontemporer", votes: 189 },
      { id: 3, text: "Desain C - Gamelan Minimalist", votes: 312 },
    ],
    totalVotes: 746,
    endsAt: "2025-11-10",
    requiredTier: "Silver",
  },
  {
    id: 2,
    question: "Setlist konser virtual bulan depan - pilih 3 lagu favorit",
    options: [
      { id: 1, text: "Rayuan Pulau Kelapa", votes: 521 },
      { id: 2, text: "Bengawan Solo", votes: 489 },
      { id: 3, text: "Burung Tantina", votes: 356 },
      { id: 4, text: "Soleram", votes: 298 },
    ],
    totalVotes: 1664,
    endsAt: "2025-11-08",
    requiredTier: "Bronze",
  },
];

export default function CommunityPage() {
  const { authenticated, user } = usePrivy();
  const [currentTier, setCurrentTier] = useState<MembershipTier>(
    membershipTiers[0]
  );
  const [userInvestments, setUserInvestments] = useState(0);
  const [, setSelectedPoll] = useState<number | null>(null);
  const [, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    if (authenticated && user?.id) {
      const progress = getUserProgressById(user.id);
      if (progress) {
        setUserInvestments(progress.totalInvestments);

        // Determine tier based on investments
        if (progress.totalInvestments >= 20) {
          setCurrentTier(membershipTiers[3]);
        } else if (progress.totalInvestments >= 10) {
          setCurrentTier(membershipTiers[2]);
        } else if (progress.totalInvestments >= 5) {
          setCurrentTier(membershipTiers[1]);
        } else {
          setCurrentTier(membershipTiers[0]);
        }
      }
    }
  }, [authenticated, user]);

  const handleVote = (pollId: number, optionId: number) => {
    setSelectedPoll(pollId);
    setSelectedOption(optionId);
    // In production: save vote to backend
    alert(`Vote berhasil! Anda memilih opsi ${optionId} untuk poll ${pollId}`);
  };

  const getTierColor = (tierName: string) => {
    return (
      membershipTiers.find((t) => t.name === tierName)?.color || "#CD7F32"
    );
  };

  return (
    <section className="w-full flex flex-col bg-black gap-[2.222vw] relative">
      {/* Header */}
      <div className="flex flex-col gap-[0.556vw]">
        <h1 className="font-jakarta font-bold text-[2.222vw] text-[var(--color-emas-nusantara)]">
          Fan Community
        </h1>
        <p className="font-jakarta text-[1.111vw] text-[var(--color-krem-lontar)]">
          Bergabunglah dengan komunitas penggemar musik Nusantara
        </p>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Current Membership Tier */}
      <div className="w-full bg-neutral-black-base rounded-[1.111vw] p-[2.222vw] border-2 border-[var(--color-coklat-jati)]">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-[1.111vw]">
            <div className="flex flex-row items-center gap-[0.833vw]">
              <Star size={40} className="text-[var(--color-emas-nusantara)]" />
              <div>
                <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
                  {currentTier.name} Member
                </h2>
                <p className="font-jakarta text-[0.972vw] text-[var(--color-krem-lontar)]/70">
                  {userInvestments} investasi selesai
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[0.556vw]">
              <p className="font-jakarta text-[1.111vw] text-white font-medium">
                Benefit Anda:
              </p>
              {currentTier.benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-row items-center gap-[0.444vw]">
                  <Award size={16} className="text-[var(--color-emas-nusantara)]" />
                  <p className="font-jakarta text-[0.972vw] text-[var(--color-krem-lontar)]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Tier Progress */}
          {currentTier.name !== "Diamond" && (
            <div className="flex flex-col items-end gap-[0.556vw]">
              <p className="font-jakarta text-[0.972vw] text-[var(--color-krem-lontar)]">
                Progress ke {membershipTiers[membershipTiers.indexOf(currentTier) + 1].name}
              </p>
              <div className="w-[15vw] h-[0.556vw] bg-[var(--color-hitam-ebony)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)]"
                  style={{
                    width: `${Math.min(
                      (userInvestments /
                        membershipTiers[membershipTiers.indexOf(currentTier) + 1]
                          .requiredInvestments) *
                        100,
                      100
                    )}%`,
                  }}
                />
              </div>
              <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                {userInvestments} /{" "}
                {
                  membershipTiers[membershipTiers.indexOf(currentTier) + 1]
                    .requiredInvestments
                }{" "}
                investasi
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* All Membership Tiers */}
      <div className="flex flex-col gap-[1.111vw]">
        <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
          Tier Membership
        </h2>
        <div className="grid grid-cols-4 gap-[1.111vw]">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-neutral-black-base rounded-[0.833vw] p-[1.111vw] border-2 ${
                tier.name === currentTier.name
                  ? "border-[var(--color-emas-nusantara)]"
                  : "border-[var(--color-coklat-jati)]"
              }`}
            >
              <div className="flex flex-col gap-[0.833vw]">
                <div className="flex flex-row items-center gap-[0.556vw]">
                  <Star size={24} className="text-[var(--color-emas-nusantara)]" />
                  <h3
                    className="font-jakarta font-bold text-[1.111vw] text-[var(--color-emas-nusantara)]"
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                  {tier.requiredInvestments === 0
                    ? "Gratis"
                    : `${tier.requiredInvestments}+ investasi`}
                </p>
                <div className="flex flex-col gap-[0.444vw]">
                  {tier.benefits.map((benefit, idx) => (
                    <p
                      key={idx}
                      className="font-jakarta text-[0.722vw] text-[var(--color-krem-lontar)]"
                    >
                      • {benefit}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Leaderboard */}
      <div className="flex flex-col gap-[1.111vw]">
        <div className="flex flex-row items-center gap-[0.833vw]">
          <TrendingUp size={28} className="text-[var(--color-emas-nusantara)]" />
          <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
            Top Fans Leaderboard
          </h2>
        </div>
        <div className="bg-neutral-black-base rounded-[1.111vw] p-[1.667vw]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-coklat-jati)]">
                <th className="text-left font-jakarta text-[0.972vw] text-[var(--color-emas-nusantara)] pb-[0.833vw]">
                  Rank
                </th>
                <th className="text-left font-jakarta text-[0.972vw] text-[var(--color-emas-nusantara)] pb-[0.833vw]">
                  Nama
                </th>
                <th className="text-left font-jakarta text-[0.972vw] text-[var(--color-emas-nusantara)] pb-[0.833vw]">
                  Tier
                </th>
                <th className="text-right font-jakarta text-[0.972vw] text-[var(--color-emas-nusantara)] pb-[0.833vw]">
                  Points
                </th>
                <th className="text-right font-jakarta text-[0.972vw] text-[var(--color-emas-nusantara)] pb-[0.833vw]">
                  Investasi
                </th>
              </tr>
            </thead>
            <tbody>
              {topFans.map((fan) => (
                <tr
                  key={fan.rank}
                  className="border-b border-[var(--color-coklat-jati)]/30"
                >
                  <td className="py-[0.833vw] font-jakarta text-[0.972vw] text-white">
                    #{fan.rank}
                  </td>
                  <td className="py-[0.833vw] font-jakarta text-[0.972vw] text-white">
                    {fan.name}
                  </td>
                  <td className="py-[0.833vw]">
                    <span
                      className="font-jakarta text-[0.833vw] font-bold"
                      style={{ color: getTierColor(fan.tier) }}
                    >
                      {fan.tier}
                    </span>
                  </td>
                  <td className="py-[0.833vw] font-jakarta text-[0.972vw] text-[var(--color-emas-nusantara)] text-right">
                    {fan.points.toLocaleString()}
                  </td>
                  <td className="py-[0.833vw] font-jakarta text-[0.972vw] text-[var(--color-krem-lontar)] text-right">
                    {fan.investments}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Community Polls */}
      <div className="flex flex-col gap-[1.111vw]">
        <div className="flex flex-row items-center gap-[0.833vw]">
          <Award size={28} className="text-[var(--color-emas-nusantara)]" />
          <h2 className="font-jakarta font-bold text-[1.667vw] text-white">
            Voting Community
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[1.111vw]">
          {communityPolls.map((poll) => (
            <div
              key={poll.id}
              className="bg-neutral-black-base rounded-[1.111vw] p-[1.667vw] border border-[var(--color-coklat-jati)]"
            >
              <div className="flex flex-col gap-[1.111vw]">
                <div className="flex flex-row justify-between items-start">
                  <div>
                    <h3 className="font-jakarta font-bold text-[1.111vw] text-white mb-[0.444vw]">
                      {poll.question}
                    </h3>
                    <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                      Berakhir: {new Date(poll.endsAt).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <span
                    className="px-[0.833vw] py-[0.278vw] rounded-full text-[0.722vw] font-jakarta font-medium"
                    style={{
                      backgroundColor: `${getTierColor(poll.requiredTier)}20`,
                      color: getTierColor(poll.requiredTier),
                    }}
                  >
                    Min. {poll.requiredTier}
                  </span>
                </div>

                <div className="flex flex-col gap-[0.556vw]">
                  {poll.options.map((option) => {
                    const percentage = (option.votes / poll.totalVotes) * 100;
                    return (
                      <div
                        key={option.id}
                        className="relative bg-black rounded-[0.556vw] p-[0.833vw] border border-[var(--color-coklat-jati)]/30 cursor-pointer hover:border-[var(--color-emas-nusantara)] transition-colors"
                        onClick={() =>
                          membershipTiers.indexOf(currentTier) >=
                          membershipTiers.findIndex(
                            (t) => t.name === poll.requiredTier
                          )
                            ? handleVote(poll.id, option.id)
                            : alert(
                                `Anda perlu tier ${poll.requiredTier} untuk voting`
                              )
                        }
                      >
                        <div
                          className="absolute inset-0 bg-[var(--color-emas-nusantara)]/10 rounded-[0.556vw]"
                          style={{ width: `${percentage}%` }}
                        />
                        <div className="relative flex flex-row justify-between items-center">
                          <p className="font-jakarta text-[0.972vw] text-white">
                            {option.text}
                          </p>
                          <p className="font-jakarta text-[0.833vw] text-[var(--color-emas-nusantara)]">
                            {percentage.toFixed(1)}% ({option.votes} votes)
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                  Total votes: {poll.totalVotes.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
