import React from "react";
import binhDinh from "../assets/binh-dinh.png";

function MatchFixture() {
  return (
    <div className="flex justify-center border-b py-2">
      <div className="w-fit flex gap-2 items-center">
        <span>Bre</span>
        <img className="w-[30px]" src={binhDinh} alt="" />
        <div className="bg-purple-950 px-2 rounded">
          <span className="text-sm font-semibold text-white">3</span>
          <span className="text-sm font-semibold text-white px-1">-</span>
          <span className="text-sm font-semibold text-white">3</span>
        </div>
        <img className="w-[30px]" src={binhDinh} alt="" />
        <span>Bre</span>
      </div>
    </div>
  );
}

export default MatchFixture;
