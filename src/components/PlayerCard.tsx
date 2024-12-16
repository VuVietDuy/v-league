import React from "react";
import { Player } from "../types/player";
import { ArrowRightOutlined } from "@ant-design/icons";

interface IProps {
  player: Player;
}

const PlayerCard = (props: IProps) => {
  const { player } = props;
  return (
    <div className="border rounded bg-white">
      <div className="flex">
        <div className="w-[100px] p-3">
          <p className="text-sm">Đã chơi</p>
          <p className="font-bold mb-2">{player.matchesPlayed}</p>
          <p className="text-sm">Ghi bàn</p>
          <p className="font-bold mb-2">{player.goalsScored}</p>
          <p className="text-sm">Hỗ trọ</p>
          <p className="font-bold mb-2">{player.assists}</p>
          <p className="text-sm">Shots</p>
          <p className="font-bold mb-2">{player.age}</p>
        </div>
        <div>
          <img
            src={"/images/ngoquoctrung.jpg"}
            className=""
            alt={player.name}
          />
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold mb-1">{player.name}</h3>
        <p className="mb-2">
          <strong>{player.jerseyNumber}</strong> {player.position} <br />
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/Flag_of_Vietnam.png" className="w-8" alt="" />
            <span className="text-[12px]">Viet Nam</span>
          </div>
          <span className="">
            View Profile <ArrowRightOutlined className="text-[12px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
