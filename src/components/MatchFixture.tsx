import React from "react";
import binhDinh from "../assets/binh-dinh.png";
import { IMatch } from "../types/match";

function MatchFixture({ match }: { match: IMatch }) {
  console.log(match);
  return (
    <div className="flex justify-center border-b py-2">
      <div className="w-fit flex gap-2 items-center">
        <span>{match.homeClub?.shortName.slice(0, 3).toUpperCase()}</span>
        <img
          className="w-[30px] rounded-full"
          src={match.homeClub?.logoURL}
          alt=""
        />
        <div className="flex items-center px-2 rounded border">
          <span className="text-sm text-purple-950 ">{match.time}</span>
        </div>
        <img
          className="w-[30px] rounded-full"
          src={match.awayClub?.logoURL}
          alt=""
        />
        <span>{match.awayClub?.shortName.slice(0, 3).toUpperCase()}</span>
      </div>
    </div>
  );
}

export default MatchFixture;
