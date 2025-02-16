import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ArrowRightOutlined, FileTextOutlined } from "@ant-design/icons";

import LatestNews from "@/components/LatestNews";
import MatchFixture from "@/components/MatchFixture";
import NewsCard from "@/components/NewsCard";
import { IClub } from "@/types/club";
import fetcher from "@/api/fetcher";
import { IMatch } from "@/types/match";
import { formatDate } from "@/utils/formatDate";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import FeaturedPlayer from "@/components/FeaturedPlayer";

interface TablesItem {
  position?: number;
  club: IClub;
  played?: number;
  won?: number;
  drawn?: number;
  lost?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  goalDifference: number;
  points: number;
}
interface Fixtures {
  [key: string]: IMatch[];
}
function Home() {
  const [tables, setTables] = useState<TablesItem[]>([]);
  const [fixtures, setFixtures] = useState<Fixtures>({});
  const { data: listNews } = useQuery({
    queryKey: ["GET_LIST_NEWS"],
    queryFn: () =>
      fetcher.get("news").then((res) => {
        return res.data;
      }),
  });

  const { data: featuredPlayer, isLoading: isLoadingFeaturedPlayer } = useQuery(
    {
      queryKey: ["GET_LIST_FEATURED_PLAYER"],
      queryFn: () =>
        fetcher.get("players/feature").then((res) => {
          return res.data;
        }),
    }
  );

  useEffect(() => {
    fetcher.get(`tournaments/vleague-1/fixtures`).then((res) => {
      let matchesData: IMatch[] = res.data;
      matchesData = matchesData.slice(0, 7);

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

  useEffect(() => {
    fetcher.get(`tournaments/vleague-1/tables`).then((res) => {
      console.log(res);
      setTables(res.data);
    });
  }, []);

  return (
    <div className=" mt-8 mb-20">
      <div className="flex px-2 flex-wrap container m-auto">
        <div className="w-full md:w-[326px] ">
          <div className="rounded-xl overflow-hidden border">
            <div className="py-4 bg-blue-500">
              <p className="text-center font-bold text-xl  text-white">
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
              <NavLink to={"/vleague-1/fixtures"} className="global-button">
                Xem thêm
                <ArrowRightOutlined />
              </NavLink>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border mt-4 mb-6">
            <div className="py-4 bg-blue-500">
              <p className="text-center font-bold text-xl  text-white">
                Bảng xếp hạng
              </p>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
              <thead className="text-[12px] text-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
                <tr>
                  <th scope="col" className="px-2 py-1">
                    VT
                  </th>
                  <th scope="col" className="px-2 py-1">
                    CLB
                  </th>
                  <th scope="col" className="px-2 py-1">
                    HS
                  </th>
                  <th scope="col" className="px-2 py-1">
                    BTSK
                  </th>
                  <th scope="col" className="px-2 py-1">
                    Điểm
                  </th>
                </tr>
              </thead>
              <tbody>
                {tables?.map((item, index) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 border-b dark:border-gray-700">
                    <td className="px-2 py-1">{item.position}</td>
                    <td className="px-2 py-1 flex items-center gap-2">
                      <img className="w-8 h-8" src={item.club.logoURL} alt="" />
                      <span className="font-semibold">
                        {item.club.shortName}
                      </span>
                    </td>
                    <td className="px-2 py-1">{item.goalsFor}</td>
                    <td className="px-2 py-1">{item.goalDifference}</td>
                    <td className="px-2 py-1 font-bold text-red-600">
                      {item.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-2">
              <NavLink to={"/vleague-1/tables"} className="global-button">
                Xem thêm
                <ArrowRightOutlined />
              </NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Cầu thủ nổi bật</h2>
            {isLoadingFeaturedPlayer ? (
              <Loading />
            ) : (
              <div className="flex flex-col gap-3">
                {featuredPlayer.map((player: any, index: number) => (
                  <FeaturedPlayer key={index} player={player} />
                ))}
              </div>
            )}
          </div>
        </div>
        {listNews && (
          <div className="flex-1 pl-6">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="col-span-2">
                <NewsCard news={listNews[0]} />
              </div>
              <div className="col-span-1">
                <NewsCard news={listNews[1]} />
                <NewsCard news={listNews[2]} />
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 p-3 mb-6">
              <div>
                <FileTextOutlined className="mr-2" />
                <span className="text-xs">
                  Hoàn thành đào tạo Trọng tài VAR
                </span>
              </div>
              <div>
                <FileTextOutlined className="mr-2" />
                <span className="text-xs">
                  Hoàn thành đào tạo Trọng tài VAR
                </span>
              </div>
              <div>
                <FileTextOutlined className="mr-2" />
                <span className="text-xs">
                  Hoàn thành đào tạo Trọng tài VAR
                </span>
              </div>
            </div>
            <LatestNews latestNews={listNews.slice(3, 40)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
