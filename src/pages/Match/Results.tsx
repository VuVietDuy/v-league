import { useEffect, useState } from "react";
import {
  ArrowRightOutlined,
  DownOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";

import { IMatch } from "@/types/match";
import fetcher from "@/api/fetcher";
import { formatDate } from "@/utils/formatDate";
import StadiumIcon from "@/components/icons/StadiumIcon";
import HeaderPage from "@/components/HeaderPage";
import { Dropdown, MenuProps } from "antd";
import { IClub } from "@/types/club";

interface Fixtures {
  [key: string]: IMatch[];
}

function Results() {
  const { tournamentId } = useParams();
  const [itemsClubFilter, setItemsClubFilter] = useState<MenuProps["items"]>();
  const [fixtures, setFixtures] = useState<Fixtures>({});

  useEffect(() => {
    let params = {
      status: "COMPLETED",
    };
    fetcher
      .get(`tournaments/${tournamentId}/results`, { params: params })
      .then((res) => {
        console.log(res);
        const matchesData: IMatch[] = res.data;
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
  }, [tournamentId]);

  useEffect(() => {
    fetcher.get(`tournaments/${tournamentId}/clubs`).then((res) => {
      const clubsData: IClub[] = res.data;
      const items = clubsData.map((club, index) => ({
        key: index,
        label: (
          <a
            className="hover:text-purple-800 text-wrap w-28"
            href={`?clubId=${club.id}`}
          >
            {club.name}
          </a>
        ),
      }));
      setItemsClubFilter(items);
    });
  }, [tournamentId]);
  return (
    <div>
      <HeaderPage title="Kết quả" />
      <div className="container m-auto px-10">
        {/* Filter */}
        <div className="flex border rounded-sm">
          <Dropdown
            menu={{
              items: [
                {
                  key: 1,
                  label: "2024/25",
                },
                {
                  key: 2,
                  label: "2023/24",
                },
                {
                  key: 3,
                  label: "2022/23",
                },
                {
                  key: 4,
                  label: "2021/22",
                },
              ],
            }}
          >
            <div
              className="w-fit px-3 py-2 flex gap-8 border-r"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <p className="text-[10px]">Lọc theo mùa giải</p>
                <p>2024/25</p>
              </div>
              <DownOutlined className="text-xs" />
            </div>
          </Dropdown>
          <Dropdown menu={{ items: itemsClubFilter }}>
            <div
              className="w-fit px-3 py-2 flex gap-8 border-r"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <p className="text-[10px]">Lọc theo câu lạc bộ</p>
                <p>Tất cả câu lạc bộ</p>
              </div>
              <DownOutlined className="text-xs" />
            </div>
          </Dropdown>
          <a
            className="px-3 flex items-center gap-2 hover:text-purple-900"
            href=""
          >
            <ReloadOutlined /> Xóa bộ lọc
          </a>
        </div>
        {/* Result */}
        {Object.entries(fixtures).map(([key, matchesOnDate]) => (
          <div>
            <h3 className="text-xl font-bold mt-6 mb-2">{key}</h3>
            {matchesOnDate.map((match) => (
              <Link
                to={`/match/${match.id}`}
                className="flex justify-between border-b py-2 bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:cursor-pointer group"
              >
                <div className="w-full lg:w-[460px] flex justify-center gap-3">
                  <div className="w-[50%] flex justify-end items-center gap-2">
                    <span className="font-semibold text-xs md:text-sm lg:text-[16px]">
                      {match.homeClub?.name.slice(0, 15)}
                    </span>
                    <img
                      className="w-[30px] rounded-full inline"
                      src={match.homeClub?.logoURL}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center px-2 rounded bg-purple-950">
                    <span className="text-sm font-bold text-white">
                      {match.homeScore || 0}
                    </span>
                    <span className="text-sm font-bold text-white px-1">-</span>
                    <span className="text-sm font-bold text-white">
                      {match.awayScore || 0}
                    </span>
                  </div>
                  <div className="w-[50%] flex items-center gap-2">
                    <img
                      className="w-[30px] rounded-full inline"
                      src={match.awayClub?.logoURL}
                      alt=""
                    />
                    <span className="font-semibold text-xs md:text-sm lg:text-[16px]">
                      {match.awayClub?.name.slice(0, 15)}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center flex-1 ml-32">
                  <StadiumIcon className="mr-2" />
                  <span className="text-xs">{match.stadium}</span>
                </div>
                <div className="flex justify-end hover:translate-x-1 mr-4 group-hover:mr-2 duration-300">
                  <ArrowRightOutlined />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
