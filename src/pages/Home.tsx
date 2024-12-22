import { ArrowRightOutlined, FileTextOutlined } from "@ant-design/icons";
import binhDinh from "../assets/binh-dinh.png";
import LatestNews from "../components/LatestNews";
import MatchFixture from "../components/MatchFixture";
import NewsCard from "../components/NewsCard";
import { vLeagueTable } from "./Tables";

function Home() {
  return (
    <div className="h-[2000px]">
      <div className="flex container m-auto">
        <div className="min-w-[326px] ">
          <div className="rounded-xl overflow-hidden border">
            <div className="py-4 bg-blue-500">
              <p className="text-center font-bold text-xl">Trận đấu tuần này</p>
            </div>
            <div className="mb-2">
              <time className="block text-purple-950 font-medium text-center">
                Saturday 9 November
              </time>
            </div>
            <div>
              <MatchFixture />
              <MatchFixture />
              <MatchFixture />
              <MatchFixture />
              <MatchFixture />
              <MatchFixture />
              <MatchFixture />
              <MatchFixture />
            </div>
            <div className="p-2">
              <button className="global-button">
                Xem thêm
                <ArrowRightOutlined />
              </button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border mt-4">
            <div className="py-4 bg-blue-500">
              <p className="text-center font-bold text-xl">Bảng xếp hạng</p>
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
                {vLeagueTable.map((item, index) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 border-b dark:border-gray-700">
                    <td className="px-2 py-1">{item.position}</td>
                    <td className="px-2 py-1 flex items-center gap-2">
                      <img className="w-8 h-8" src={binhDinh} alt="" />
                      <span className="font-semibold">Binh Dinh FC</span>
                    </td>
                    <td className="px-2 py-1">{item.GA}</td>
                    <td className="px-2 py-1">{item.GF - item.GA}</td>
                    <td className="px-2 py-1 font-bold text-red-600">5</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-2">
              <button className="global-button">
                Xem thêm
                <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="grow pl-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="col-span-2">
              <NewsCard
                news={{
                  title:
                    "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
                  imgUrl: "/images/news.jpg",
                  tag: "Thông báo",
                }}
              />
            </div>
            <div className="col-span-1">
              <NewsCard
                news={{
                  title:
                    "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
                  imgUrl: "/images/news.jpg",
                  tag: "Thông báo",
                }}
              />
              <NewsCard
                news={{
                  title:
                    "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
                  imgUrl: "/images/news.jpg",
                  tag: "Thông báo",
                }}
              />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-3 p-3 mb-6">
            <div>
              <FileTextOutlined className="mr-2" />
              <span className="text-xs">Hoàn thành đào tạo Trọng tài VAR</span>
            </div>
            <div>
              <FileTextOutlined className="mr-2" />
              <span className="text-xs">Hoàn thành đào tạo Trọng tài VAR</span>
            </div>
            <div>
              <FileTextOutlined className="mr-2" />
              <span className="text-xs">Hoàn thành đào tạo Trọng tài VAR</span>
            </div>
          </div>
          <LatestNews />
        </div>
      </div>
    </div>
  );
}

export default Home;
