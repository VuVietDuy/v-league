import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link, NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import LatestNews from "@/components/LatestNews";
import MatchFixture from "@/components/MatchFixture";
import fetcher from "@/api/fetcher";
import { IMatch } from "@/types/match";
import { formatDate } from "@/utils/formatDate";
import Loading from "@/components/Loading";
import { IClub } from "@/types/club";

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
  const [clubData, setClubData] = useState<IClub>();

  useEffect(() => {
    fetcher.get(`/clubs/${clubId}`).then((res) => {
      setClubData(res.data.data);
    });
  }, [clubId]);

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
  }, [clubId]);

  if (isLoadingLatestNews) {
    return <Loading />;
  }
  return (
    <div className="flex container m-auto mb-20">
      <div className="min-w-[326px] ">
        <div>
          <h2 className="font-bold mb-4">Trang chính thức</h2>
          <div className="mb-4">
            <div className="px-3 py-2 border rounded flex justify-between hover:bg-purple-50 cursor-pointer mb-2">
              <span>Website</span>
              <ArrowRightOutlined />
            </div>
            <div className="px-3 py-2 border rounded flex justify-between hover:bg-purple-50 cursor-pointer mb-2">
              <span>Cửa hàng</span>
              <ArrowRightOutlined />
            </div>
            <div className="px-3 py-2 border rounded flex justify-between hover:bg-purple-50 cursor-pointer mb-2">
              <span>Mua vé</span>
              <ArrowRightOutlined />
            </div>
          </div>
          <h2 className="font-bold mb-4">Mạng xã hội</h2>
          <div className="flex gap-2 mb-6">
            <a href="">
              <img
                className="w-8 h-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-8 h-8"
                src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-8 h-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border">
          <div className="py-4 bg-blue-500">
            <p className="text-center font-bold text-xl text-white">
              Lịch thi đấu
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
        <h2 className="font-bold mb-4">Thông tin chung</h2>
        <div className="mb-4">
          <div className="px-3 py-2 border rounded flex  gap-2 mb-2">
            <span className="">Huấn luyện viên: </span>
            <span className="font-bold uppercase">{clubData?.coach}</span>
          </div>
          <div className="px-3 py-2 border rounded flex gap-2  mb-2">
            <span className="">Năm thành lập: </span>
            <span className="font-bold uppercase">{clubData?.foundedYear}</span>
          </div>
          <div className="px-3 py-2 border rounded flex gap-2  mb-2">
            <span className="">Sân vận động: </span>
            <span className="font-bold uppercase">{clubData?.stadium}</span>
          </div>
        </div>
        <h2 className="font-bold mb-4">Mô tả</h2>
        <div className="px-3 py-2 border rounded  mb-2">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: clubData?.bio || "" }}
          />
        </div>
        <LatestNews latestNews={listNews} />
      </div>
    </div>
  );
}

export default ClubOverview;
