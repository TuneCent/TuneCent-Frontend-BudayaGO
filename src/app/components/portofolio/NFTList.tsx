"use client";
import { FiLock } from "react-icons/fi";

interface NFTProps {
  id: number;
  activePools?: boolean;
  NFTName: string;
  status: "Minted" | "Not Minted";
  chronosLockActive?: boolean;
}

const NFTData: NFTProps[] = [
  {
    id: 1,
    activePools: true,
    NFTName: "Gundul Pacul",
    status: "Minted",
    chronosLockActive: true,
  },
  {
    id: 2,
    activePools: true,
    NFTName: "Bubuy Bulan",
    status: "Minted",
    chronosLockActive: true,
  },
];

const NFTList = () => {
  return (
    <div className="flex flex-col w-[30vw] aspect-[426/280] bg-neutral-black-base gap-[1.111vw] p-[1.111vw] justify-center">
      <div className="flex flex-row w-full justify-between">
        <p className="font-bold text-[1.389vw] text-white font-jakarta">
          NFT List
        </p>
        <p className="text-white-darker font-jakarta text-[0.972vw]">
          Show All
        </p>
      </div>
      {NFTData.map((dataKey) => (
        <div
          key={dataKey.id}
          onClick={() => {}}
          className="cursor-pointer w-full aspect-[378/97] bg-black p-[1.333vw]"
        >
          <p className="font-jakarta text-white text-[0.833vw] font-[500]">
            {dataKey.activePools ? "Active Pools" : "Inactive Pools"}
          </p>
          <p className="font-jakarta text-white text-[1.667vw] font-bold">
            {dataKey.NFTName}
          </p>
          <div className="w-full flex flex-row gap-[0.667vw]">
            <p
              className={`font-jakarta text-[0.822vw] font-[500] ${
                dataKey.status === "Minted" ? "text-[#72FFC7]" : "text-red-500"
              }`}
            >
              {dataKey.status}
            </p>
            <FiLock size={12} color="white" />
            <p className="font-jakarta text-white text-[0.822vw] font-[500]">
              {dataKey.chronosLockActive === true
                ? "Chronos Lock is Active"
                : "Chronos Lock is Inactive"}
            </p>
          </div>
        </div>
      ))}
      <div className=""></div>
    </div>
  );
};

export default NFTList;
