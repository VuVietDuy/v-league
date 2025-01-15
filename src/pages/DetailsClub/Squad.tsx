import React, { useEffect, useState } from "react";
import PlayerCard from "../../components/PlayerCard";
import fetcher from "../../api/fetcher";
import { useParams } from "react-router-dom";
import { IPlayer } from "../../types/player";

function Squad() {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const { clubId } = useParams();
  console.log(clubId);
  useEffect(() => {
    fetcher.get(`clubs/${clubId}/players`).then((res) => {
      setPlayers(res.data.data.players);
      console.log(res);
    });
  }, []);
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
