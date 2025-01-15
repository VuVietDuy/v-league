import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { IPlayer } from "../types/player";
import squadBackground from "../assets/squad-bg.svg";

interface IProps {
  player: IPlayer;
}

const PlayerCard = (props: IProps) => {
  const { player } = props;
  return (
    <div className="border rounded">
      <div className="flex relative ">
        <div className="w-[100px] p-3">
          <p className="text-sm">Đã chơi</p>
          <p className="font-bold mb-2">{1}</p>
          <p className="text-sm">Ghi bàn</p>
          <p className="font-bold mb-2">{1}</p>
          <p className="text-sm">Hỗ trọ</p>
          <p className="font-bold mb-2">{1}</p>
          <p className="text-sm">Shots</p>
          <p className="font-bold mb-2">{1}</p>
        </div>
        <div className="flex-1">
          <img
            src={player.imageURL}
            className="flex-1 h-full"
            alt={player.name}
          />
        </div>
        <img
          className="absolute h-full top-0 left-0 right-0 bottom-0 -z-10"
          src={squadBackground}
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold mb-1">{player.name}</h3>
        <p className="mb-2">
          <strong>{1}</strong> {player.position} <br />
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/Flag_of_Vietnam.png" className="w-8" alt="" />
            <span className="text-[12px]">{player.nationality}</span>
          </div>
          <span className="">
            Xem thêm <ArrowRightOutlined className="text-[12px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
