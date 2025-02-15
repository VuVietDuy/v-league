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
import { Link, useParams, useSearchParams } from "react-router-dom";
import { formatDate } from "@/utils/formatDate";
import StadiumIcon from "@/components/icons/StadiumIcon";
import HeaderPage from "@/components/HeaderPage";
import { Dropdown, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";

interface Fixtures {
  [key: string]: IMatch[];
}

function Fixtures() {
  const { tournamentId } = useParams();
  const [fixtures, setFixtures] = useState<Fixtures>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const clubId = searchParams.get("clubId");
  const seasonId = searchParams.get("seasonId");

  const { data: clubsData, isLoading: isLoadingClubsData } = useQuery({
    queryKey: ["GET_LISTS_CLUB_FOR_RESULTS_PAGE"],
    queryFn: () =>
      fetcher.get(`tournaments/${tournamentId}/clubs`).then((res) => res.data),
  });

  const { data: seasonsData, isLoading: isLoadingSeasonsData } = useQuery({
    queryKey: ["GET_LISTS_SEASON_FOR_RESULTS_PAGE"],
    queryFn: () =>
      fetcher
        .get(`tournaments/${tournamentId}/seasons`)
        .then((res) => res.data),
  });

  useEffect(() => {
    let params = {};
    params = {
      ...params,
      status: "COMPLETED",
    };
    if (clubId) {
      params = { ...params, clubId: clubId };
    }
    if (seasonId) {
      params = { ...params, seasonId: seasonId };
    }
    fetcher
      .get(`tournaments/${tournamentId}/fixtures`, { params: params })
      .then((res) => {
        const matchesData: IMatch[] = res.data;
        matchesData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
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
  }, [tournamentId, clubId, seasonId]);

  return (
    <div>
      <HeaderPage title="Lịch thi đấu" />
      <div className="container m-auto px-10">
        <div className="flex border rounded-sm">
          <Dropdown
            menu={{
              items: isLoadingSeasonsData
                ? []
                : seasonsData.map((season: any, index: number) => ({
                    key: index,
                    label: (
                      <a
                        className="hover:text-purple-800 text-wrap w-28"
                        href={`?seasonId=${season.id}`}
                      >
                        {season.name.split(" ").slice(-1)[0]}
                      </a>
                    ),
                  })),
            }}
          >
            <div
              className="w-fit px-3 py-2 flex gap-8 border-r"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <p className="text-[10px]">Lọc theo mùa giải</p>
                <p>
                  {seasonId === null || (isLoadingSeasonsData && <Spin />)}
                  {seasonId !== null && !isLoadingSeasonsData
                    ? seasonsData
                        .filter((season: any) => season.id === +seasonId)[0]
                        .name.split(" ")
                        .slice(-1)[0]
                    : !isLoadingSeasonsData &&
                      seasonsData
                        .filter((season: any) => season.isActive)[0]
                        .name.split(" ")
                        .slice(-1)[0]}
                </p>
              </div>
              <DownOutlined className="text-xs" />
            </div>
          </Dropdown>
          <Dropdown
            menu={{
              items: isLoadingClubsData
                ? []
                : clubsData.map((club: any, index: number) => ({
                    key: index,
                    label: (
                      <a
                        className="hover:text-purple-800 text-wrap"
                        href={`?clubId=${club.id}`}
                      >
                        {club.name}
                      </a>
                    ),
                  })),
            }}
          >
            <div
              className="w-fit px-3 py-2 flex gap-8 border-r"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <p className="text-[10px]">Lọc theo câu lạc bộ</p>
                <p>
                  {clubId !== null && !isLoadingClubsData
                    ? clubsData.filter((club: any) => club.id === +clubId)[0]
                        .name
                    : "Tất cả câu lạc bộ"}
                </p>
              </div>
              <DownOutlined className="text-xs" />
            </div>
          </Dropdown>
          <Link
            className="px-3 flex items-center gap-2 hover:text-purple-900"
            to=""
          >
            <ReloadOutlined /> Xóa bộ lọc
          </Link>
        </div>
        {Object.entries(fixtures).map(([key, matchesOnDate]) => (
          <div key={key}>
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
