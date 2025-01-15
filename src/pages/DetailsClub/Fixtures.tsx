import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMatch } from "../../types/match";
import { MenuProps } from "antd";
import fetcher from "../../api/fetcher";
import { formatDate } from "../../utils/formatDate";
import { IClub } from "../../types/club";
import StadiumIcon from "../../components/icons/StadiumIcon";

interface Fixtures {
  [key: string]: IMatch[];
}
function Fixtures() {
  const { clubId } = useParams();
  const [fixtures, setFixtures] = useState<Fixtures>({});

  useEffect(() => {
    fetcher.get(`clubs/${clubId}/matches`).then((res) => {
      const matchesData: IMatch[] = res.data.data;
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
    <div className="container m-auto px-10">
      {Object.entries(fixtures).map(([key, matchesOnDate]) => (
        <div>
          {matchesOnDate.map((match) => (
            <>
              <h3 className="text-xl font-bold mt-6">{key}</h3>
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
  );
}

export default Fixtures;
