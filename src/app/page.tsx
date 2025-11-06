import MusicPool from "./components/dashboard/MusicPool";
import Navbar from "./components/Navbar";
import Hero from "./components/landingpage/Hero";
import Leaderboard from "./components/music/Leaderboard";
import TopArtist from "./components/landingpage/TopArtist";

export default function Home() {
  return (
    <div className="flex flex-col gap-[3.333vw] items-center justify-center overflow-x-hidden bg-black font-sans  min-h-screen">
      <Navbar />
      <main className="flex flex-col w-[75vw] gap-[5.556vw] py-[2.222vw] pt-[8.889vw] row-start-2 sm:items-start">
        <Hero />
        <MusicPool title="Lagu Trending" />
        <TopArtist />
        <div className="w-full flex flex-row justify-between">
          <Leaderboard />
          <Leaderboard category="Music" />
        </div>
      </main>
    </div>
  );
}
