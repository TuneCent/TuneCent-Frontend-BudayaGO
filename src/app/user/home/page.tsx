import MusicPool from "@/app/components/dashboard/MusicPool";
import TopArtist from "@/app/components/landingpage/TopArtist";
import Leaderboard from "@/app/components/music/Leaderboard";
import PromotionalBanner from "@/app/components/dashboard/PromotionalBanner";

const UserHomePage = () => {
  return (
    <section className="flex flex-col w-[75vw] gap-[2.222vw]">
      <PromotionalBanner />
      <MusicPool title="Dibuat Untuk Anda" />
      <MusicPool title="Lanjutkan Mendengarkan" />
      <TopArtist />
      <div className="w-full flex flex-row gap-[1.111vw]">
        <Leaderboard category="Artist" />
        <Leaderboard category="Music" />
      </div>
    </section>
  );
};

export default UserHomePage;
