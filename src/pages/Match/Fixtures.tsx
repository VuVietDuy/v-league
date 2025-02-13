/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArrowRightOutlined,
  DownOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import fetcher from "@/api/fetcher";
import { IMatch } from "@/types/match";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/formatDate";
import StadiumIcon from "@/components/icons/StadiumIcon";
import HeaderPage from "@/components/HeaderPage";
import { Dropdown, MenuProps, Select } from "antd";
import { IClub } from "@/types/club";

interface Fixtures {
  [key: string]: IMatch[];
}

interface Club {
  id: number;
  name: string;
}

function Fixtures() {
  const { tournamentId } = useParams();
  const [fixtures, setFixtures] = useState<Fixtures>({});
  const [itemsClubFilter, setItemsClubFilter] = useState<Club[]>();
  const [selectedClubId, setselectedClubIdId] = useState<number>();

  useEffect(() => {
    fetcher.get(`tournaments/${tournamentId}/fixtures`).then((res) => {
      let matchesData: IMatch[] = res.data;
      matchesData = matchesData.slice(0, 7);
      const newFixtures: Fixtures = {};
      matchesData.map((match, index) => {
        const formattedDate = formatDate(
          new Date(match?.date).toISOString().split("T")[0]
        );

        if (newFixtures[formattedDate]) {
          newFixtures[formattedDate].push(match);
        } else {
          newFixtures[formattedDate] = [match];
        }
      });
      setFixtures(newFixtures);
    });

    fetcher.get(`tournaments/${tournamentId}/clubs`).then((res) => {
      const clubsData: IClub[] = res.data;
      const clubs: Club[] = [];
      clubsData.map((club) => {
        clubs.push({
          id: Number(club.id),
          name: club.name,
        });
      });
      setItemsClubFilter(clubs);
    });
  }, []);
  console.log(fixtures);
  useEffect(() => {
    if (selectedClubId) {
      fetcher
        .get(`tournaments/${tournamentId}/fixtures?clubId=${selectedClubId}`)
        .then((res) => {
          let matchesData: IMatch[] = res.data;
          matchesData = matchesData.slice(0, 7);
          const newFixtures: Fixtures = {};
          matchesData.map((match, index) => {
            const formattedDate = formatDate(
              new Date(match?.date).toISOString().split("T")[0]
            );

            if (newFixtures[formattedDate]) {
              newFixtures[formattedDate].push(match);
            } else {
              newFixtures[formattedDate] = [match];
            }
          });
          setFixtures(newFixtures);
          // const clubsData: IClub[] = res.data;
        });
    }
  }, [selectedClubId]);

  const handleSelectClub = (e: any) => {
    setselectedClubIdId(e);
  };

  return (
    <div>
      <HeaderPage title="Lịch thi đấu" />
      <div className="container m-auto px-10">
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
          <Select
            onChange={handleSelectClub}
            defaultValue={""}
            className="w-40 h-[55px] bg-gray-100 border-none! rounded-none! text-sm shadow-sm"
          >
            <Select.Option value="">
              Lọc theo câu lạc bộ câu lạc bộ
            </Select.Option>
            {itemsClubFilter?.map((club, index) => (
              <Select.Option key={index} value={club?.id}>
                {club?.name}
              </Select.Option>
            ))}
          </Select>
          {/* <Dropdown menu={{ items: itemsClubFilter }} trigger={["click"]}>
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
          </Dropdown> */}
          <a
            className="px-3 flex items-center gap-2 hover:text-purple-900"
            href=""
          >
            <ReloadOutlined /> Xóa bộ lọc
          </a>
        </div>
        {Object.entries(fixtures).map(([key, matchesOnDate], index) => (
          <div>
            <h3 className="text-xl font-bold mt-6">{key}</h3>
            {matchesOnDate.map((match) => (
              <>
                <div className="flex justify-between border-b py-2">
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
                    <div className="flex items-center px-2 rounded border">
                      <span className="text-sm text-purple-950 ">
                        {match.time}
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
                  <div className="flex justify-end">
                    <ArrowRightOutlined />
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fixtures;
