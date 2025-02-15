import PlayerCard from "@/components/PlayerCard";
import fetcher from "@/api/fetcher";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import { IPlayer } from "@/types/player";

function ClubSquad() {
  const { clubId } = useParams();
  const { data: players, isLoading } = useQuery({
    queryKey: ["GET_LIST_PLAYER_IN_CLUB"],
    queryFn: () =>
      fetcher
        .get(`clubs/${clubId}/players`)
        .then((res) => res.data.data.players),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container m-auto mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player: IPlayer, index: number) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ClubSquad;
