import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link, NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import LatestNews from "@/components/LatestNews";
import MatchFixture from "@/components/MatchFixture";
import fetcher from "@/api/fetcher";
import { IMatch } from "@/types/match";
import { formatDate } from "@/utils/formatDate";

interface Fixtures {
  [key: string]: IMatch[];
}
function ClubOverview() {
  const { clubId } = useParams();
  const [fixtures, setFixtures] = useState<Fixtures>({});
  const { data: listNews, isLoading: isLoadingLatestNews } = useQuery({
    queryKey: ["GET_LIST_NEWS"],
    queryFn: () =>
      fetcher.get("news").then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    fetcher.get(`clubs/${clubId}/matches`).then((res) => {
      const matchesData: IMatch[] = res.data.data.slice(1, 10);
      const newFixtures: Fixtures = {};
      matchesData.map((match) => {
        const formattedDate = formatDate(
          new Date(match.date).toISOString().split("T")[0]
        );

        if (newFixtures[formattedDate]) {
          newFixtures[formattedDate].push(match);
        } else {
          newFixtures[formattedDate] = [match];
        }
      });
      setFixtures(newFixtures);
    });
  }, []);
  if (isLoadingLatestNews) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex container m-auto">
      <div className="min-w-[326px] ">
        <div className="rounded-xl overflow-hidden border">
          <div className="py-4 bg-blue-500">
            <p className="text-center font-bold text-xl text-white">
              Trận đấu tuần này
            </p>
          </div>
          <div>
            {Object.entries(fixtures).map(([key, matchesOnDate]) => (
              <div>
                <div className="mb-2 mt-2">
                  <time className="text-xl block text-purple-950 font-medium text-center">
                    {key}
                  </time>
                </div>
                {matchesOnDate.map((match) => (
                  <>
                    <MatchFixture match={match} />
                  </>
                ))}
              </div>
            ))}
          </div>
          <div className="p-2">
            <NavLink to="/news" className="global-button">
              Xem thêm
              <ArrowRightOutlined />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="grow pl-6">
        <LatestNews latestNews={listNews} />
      </div>
    </div>
  );
}

export default ClubOverview;
