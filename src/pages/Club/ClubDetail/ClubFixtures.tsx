import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMatch } from "@/types/match";
import fetcher from "@/api/fetcher";
import { formatDate } from "@/utils/formatDate";
import StadiumIcon from "@/components/icons/StadiumIcon";

interface Fixtures {
  [key: string]: IMatch[];
}
function ClubFixtures() {
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
    <div className="container m-auto px-10 mb-20">
      {Object.entries(fixtures).map(([key, matchesOnDate]) => (
        <div key={key}>
          {matchesOnDate.map((match, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mt-6">{key}</h3>
              <div className="flex justify-between border-b py-2">
                <div className="w-full lg:w-[560px] flex justify-center gap-3">
                  <div className="w-[50%] flex justify-end items-center gap-2">
                    <span className="font-semibold text-xs md:text-sm lg:text-[16px] text-right">
                      {match.homeClub?.name}
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
                      {match.awayClub?.name}
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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ClubFixtures;
