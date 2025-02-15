import fetcher from "@/api/fetcher";
import { renderIconEvent } from "@/utils/renderIconEvent";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

export default function MatchEvents() {
  const { matchId } = useParams();
  const { data: match, isLoading } = useQuery({
    queryKey: ["GET_MATCH_EVENTS"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/events`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) {
    return <div>Is Loading</div>;
  }

  return (
    <div>
      {!isLoading && match ? (
        <div className="rounded-2xl bg-white p-4 flex gap-2 border">
          <div className="flex-1">
            <div className=" flex items-center gap-4">
              <div className="w-20 h-20">
                <img
                  src={match?.homeClub?.logoURL}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-xl flex items-center font-bold">
                <Link to={`/clubs/${match.homeClubId}`}>
                  {match?.homeClub?.name}
                </Link>
              </p>
            </div>
            <div>
              <ul className="mr-6 mt-4">
                {match.events
                  .filter(
                    (event: any) =>
                      event.eventType === "GOAL" ||
                      event.eventType === "OWN_GOAL"
                  )
                  .filter((event: any) => event.clubId === match.homeClubId)
                  .map((event: any, index: number) => (
                    <li className="mb-2 flex flex-col items-end" key={index}>
                      <div className="flex text-sm font-bold gap-2">
                        {event.eventTime}'{renderIconEvent(event.eventType, 3)}
                      </div>
                      <a className="text-sm">{event?.player?.name}</a>
                      <a className="text-xs">
                        {/* { && event.assist.name}{" "} */}
                        {event.eventType === "GOAL" &&
                          `${event?.assist?.name} (Kiến tạo)`}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-purple-950 rounded-b-xl p-4">
              <div className="text-5xl font-bold text-white flex px-2">
                <span>{match?.homeScore}</span>
                <span>-</span>
                <span>{match?.awayScore}</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-end gap-4">
              <p className="text-xl flex items-center font-bold">
                <Link to={`/clubs/${match.awayClubId}`}>
                  {match?.awayClub?.name}
                </Link>
              </p>
              <div className="w-20 h-20">
                <img
                  src={match?.awayClub?.logoURL}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div>
              <ul className="ml-6 mt-4">
                {match.events
                  .filter(
                    (event: any) =>
                      event.eventType === "GOAL" ||
                      event.eventType === "OWN_GOAL"
                  )
                  .filter((event: any) => event.clubId === match.awayClubId)
                  .map((event: any, index: number) => (
                    <li className="mb-2" key={index}>
                      <span className="flex text-sm font-bold gap-2">
                        {renderIconEvent(event.eventType, 3)}
                        {event.eventTime}'
                      </span>
                      <a className="text-sm block">{event?.player?.name}</a>
                      <a className="text-xs">
                        {event.eventType === "GOAL" &&
                          `${event?.assist?.name} (Kiến tạo)`}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
