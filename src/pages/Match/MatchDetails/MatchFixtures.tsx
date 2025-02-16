import fetcher from "@/api/fetcher";
import Loading from "@/components/Loading";
import MatchFixture from "@/components/MatchFixture";
import { IClub } from "@/types/club";
import { IMatch } from "@/types/match";
import { formatDate } from "@/utils/formatDate";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

export default function MatchFixtures() {
  const { data: tables, isLoading: isLoadingTables } = useQuery({
    queryKey: ["GET_TABLES"],
    queryFn: async () =>
      fetcher.get(`tournaments/vleague-1/tables`).then((res) => res.data),
  });
  const [fixtures, setFixtures] = useState<Fixtures>({});

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

  return (
    <div className="min-w-[326px] ">
      <div className="rounded-xl overflow-hidden border">
        <div className="py-4 bg-blue-500">
          <p className="text-center font-bold text-xl  text-white">
            Trận đấu tuần này
          </p>
        </div>

        <div>
          {Object.entries(fixtures).map(([key, matchesOnDate]) => (
            <div key={key}>
              <div className="mb-2 mt-2">
                <time className="text-xl block text-purple-950 font-medium text-center">
                  {key}
                </time>
              </div>
              {matchesOnDate.map((match, index) => (
                <MatchFixture match={match} key={index} />
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
      <div className="rounded-xl overflow-hidden border mt-4">
        <div className="py-4 bg-blue-500">
          <p className="text-center font-bold text-xl  text-white">
            Bảng xếp hạng
          </p>
        </div>
        {isLoadingTables ? (
          <Loading />
        ) : (
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
              {tables?.map((item: TablesItem, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 border-b dark:border-gray-700"
                >
                  <td className="px-2 py-1">{item.position}</td>
                  <td className="px-2 py-1 flex items-center gap-2">
                    <img className="w-8 h-8" src={item.club.logoURL} alt="" />
                    <span className="font-semibold">{item.club.shortName}</span>
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
        )}
        <div className="p-2">
          <NavLink to={"/vleague-1/tables"} className="global-button">
            Xem thêm
            <ArrowRightOutlined />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
