import React, { useEffect, useState } from "react";
import PlayerCard from "../../components/PlayerCard";
import { Player } from "../../types/player";

const players: Player[] = [
  {
    id: 1,
    name: "Nguyễn Văn Toàn",
    age: 27,
    jerseyNumber: 9,
    position: "Tiền đạo",
    club: "Hoàng Anh Gia Lai",
    nationality: "Việt Nam",
    goalsScored: 12,
    assists: 8,
    matchesPlayed: 20,
  },
  {
    id: 2,
    name: "Quế Ngọc Hải",
    age: 30,
    jerseyNumber: 3,
    position: "Hậu vệ",
    club: "Sông Lam Nghệ An",
    nationality: "Việt Nam",
    goalsScored: 3,
    assists: 2,
    matchesPlayed: 18,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },

  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
  {
    id: 3,
    name: "Nguyễn Quang Hải",
    age: 26,
    jerseyNumber: 19,
    position: "Tiền vệ",
    club: "Hà Nội FC",
    nationality: "Việt Nam",
    goalsScored: 5,
    assists: 10,
    matchesPlayed: 22,
  },
];

function Squad() {
  return (
    <div className="container m-auto">
      <h1 className="my-4">Player List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => (
          <PlayerCard player={player} />
        ))}
      </div>
    </div>
  );
}

export default Squad;
