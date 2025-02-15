import fetcher from "@/api/fetcher";
import Loading from "@/components/Loading";
import { DownOutlined, ReloadOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Dropdown, Spin } from "antd";
import { Link, useParams, useSearchParams } from "react-router-dom";

const cardData = [
  {
    key: "played",
    label: "Số trận thi đấu",
    value: 1252,
  },
  {
    label: "Số trận thắng",
    value: 687,
  },
  {
    label: "Số trận thua",
    value: 262,
  },
  {
    label: "Bàn thắng",
    value: 2245,
  },
  {
    label: "Bàn thua",
    value: 1252,
  },
  {
    label: "Số trận sạch lưới",
    value: 476,
  },
];

const attack = {
  "Bàn thắng": 2245,
  "Bàn thắng mỗi trận": 1.79,
  "Số lần dứt điểm": 10869,
  "Dứt điểm trúng đích": 3891,
  "Dứt điểm chính xác": "36%",
  "Bàn thắng penalty": 86,
  "Cơ hội tạo ra": 1051,
  "Bóng chạm khung thành": 300,
};
const teamPlay = {
  "Số đường chuyền": 377720,
  "Đường chuyền mỗi trận": 301.69,
  "Chuyền chính xác": "84%",
  "Số lần tạt bóng": 14827,
  "Tạt bóng chính xác": "21%",
};
const defence = {
  "Số trận sạch lưới": 476,
  "Số bàn thua": 1249,
  "Bàn thua mỗi trận": 0.99,
  "Cứu thua": 1474,
  "Tắc bóng": 13118,
  "Tắc bóng thành công": "70%",
  "Cản phá cú sút": 2987,
  "Truy cản": 2987,
  "Phá bóng": 17058,
  "Phá bóng bằng đầu": 6777,
  "Tranh chấp tay đôi": 48173,
  "Phạm lỗi dẫn đén bàn thua": 139,
  "Phản lưới": 48,
};
const discipline = {
  "Thẻ vàng": 1902,
  "Thẻ đỏ": 108,
  "Phạm lỗi": 2447,
  "Việt vị": 1559,
};
export default function ClubStats() {
  const { clubId } = useParams();
  const { data: clubStats, isLoading } = useQuery({
    queryKey: ["GET_CLUB_STATS"],
    queryFn: () =>
      fetcher
        .get(`tournaments/vleague-1/clubs/${clubId}/stats`)
        .then((res) => res.data),
  });
  const { data: seasonsData, isLoading: isLoadingSeasonsData } = useQuery({
    queryKey: ["GET_LISTS_SEASON_FOR_RESULTS_PAGE"],
    queryFn: () =>
      fetcher.get(`tournaments/vleague-1/seasons`).then((res) => res.data),
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const seasonId = searchParams.get("seasonId");
  console.log(clubStats);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {" "}
      <div className="container mx-auto px-10 pb-10">
        <div className="flex justify-between border rounded-sm">
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

          <Link
            className="px-3 flex items-center gap-2 hover:text-purple-900"
            to=""
          >
            <ReloadOutlined /> Xóa bộ lọc
          </Link>
        </div>

        <div className="grid sm:grid-cols-12 grid-cols-10 gap-3 mt-10">
          <div className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border">
            <p className="text-md font-light mb-3.5 text-primary">
              Số trận thi đấu
            </p>
            <p className="md:text-5xl text-4xl font-bold text-primary">
              {clubStats.matchesPlayed.toLocaleString("en-US")}
            </p>
          </div>
          <div className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border">
            <p className="text-md font-light mb-3.5 text-primary">
              Số trận thắng
            </p>
            <p className="md:text-5xl text-4xl font-bold text-primary">
              {clubStats.wins.toLocaleString("en-US")}
            </p>
          </div>
          <div className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border">
            <p className="text-md font-light mb-3.5 text-primary">
              Số trận thua
            </p>
            <p className="md:text-5xl text-4xl font-bold text-primary">
              {clubStats.losses.toLocaleString("en-US")}
            </p>
          </div>
          <div className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border">
            <p className="text-md font-light mb-3.5 text-primary">Bàn thắng</p>
            <p className="md:text-5xl text-4xl font-bold text-primary">
              {clubStats.goals.toLocaleString("en-US")}
            </p>
          </div>
          <div className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border">
            <p className="text-md font-light mb-3.5 text-primary">Bàn thua</p>
            <p className="md:text-5xl text-4xl font-bold text-primary">
              {clubStats.goalsConceded.toLocaleString("en-US")}
            </p>
          </div>
          <div className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border">
            <p className="text-md font-light mb-3.5 text-primary">
              Số trận sạch lưới
            </p>
            <p className="md:text-5xl text-4xl font-bold text-primary">
              {clubStats.cleanSheets.toLocaleString("en-US")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2.5 mt-10">
          <div className="col-span-4 sm:col-span-2 md:col-span-1 text-primary">
            <div className="rounded-md border  border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-red-500">
              <p className="text-xl font-bold px-2 py-3.5 border-b">Tấn công</p>
              <div className=" border-b-slate-200 flex justify-between px-2 py-2.5">
                <span className="text-md font-light">Bàn thắng</span>
                <span className="text-md font-bold">
                  {typeof clubStats.attack.goals === "number"
                    ? clubStats.attack.goals.toLocaleString("en-US")
                    : clubStats.attack.goals}
                </span>
              </div>
              <div className=" border-b-slate-200 flex justify-between px-2 py-2.5">
                <span className="text-md font-light">Bàn thắng mỗi trận</span>
                <span className="text-md font-bold">
                  {typeof clubStats.attack.goalsPerMatch === "number"
                    ? clubStats.attack.goalsPerMatch.toLocaleString("en-US")
                    : clubStats.attack.goalsPerMatch}
                </span>
              </div>
              <div className=" border-b-slate-200 flex justify-between px-2 py-2.5">
                <span className="text-md font-light">Số lần dứt điểm</span>
                <span className="text-md font-bold">
                  {typeof clubStats.attack.shots === "number"
                    ? clubStats.attack.shots.toLocaleString("en-US")
                    : clubStats.attack.shots}
                </span>
              </div>
              <div className=" border-b-slate-200 flex justify-between px-2 py-2.5">
                <span className="text-md font-light">Dứt điểm trúng đích</span>
                <span className="text-md font-bold">
                  {typeof clubStats.attack.shotsOnTarget === "number"
                    ? clubStats.attack.shotsOnTarget.toLocaleString("en-US")
                    : clubStats.attack.shotsOnTarget}
                </span>
              </div>
              <div className=" border-b-slate-200 flex justify-between px-2 py-2.5">
                <span className="text-md font-light">Dứt điểm chính xác %</span>
                <span className="text-md font-bold">
                  {typeof clubStats.attack.shootingAccuracy === "number"
                    ? clubStats.attack.shootingAccuracy.toLocaleString("en-US")
                    : clubStats.attack.shootingAccuracy}{" "}
                  %
                </span>
              </div>
              <div className=" border-b-slate-200 flex justify-between px-2 py-2.5">
                <span className="text-md font-light">Cơ hội tạo ra</span>
                <span className="text-md font-bold">
                  {typeof clubStats.attack.keyPass === "number"
                    ? clubStats.attack.keyPass.toLocaleString("en-US")
                    : clubStats.attack.keyPass}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            <div className="rounded-md border  border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-red-500 text-primary">
              <p className="text-xl font-bold px-2 py-3.5 border-b">
                Phòng thủ
              </p>
              {Object.entries(defence).map(([key, value], index) => (
                <div
                  key={index}
                  className="border-b-slate-200 flex justify-between px-2 py-2.5"
                >
                  <span className="text-md font-light">{key}</span>
                  <span className="text-md font-bold">
                    {typeof value === "number"
                      ? value.toLocaleString("en-US")
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className=" col-span-4 sm:col-span-2 md:col-span-1">
            <div className="rounded-md border border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-red-500 text-primary">
              <p className="text-xl font-bold px-2 py-3.5 border-b">Phối hợp</p>
              {Object.entries(teamPlay).map(([key, value], index) => (
                <div
                  key={index}
                  className="border-b-slate-200 flex justify-between px-2 py-2.5"
                >
                  <span className="text-md font-light">{key}</span>
                  <span className="text-md font-bold">
                    {typeof value === "number"
                      ? value.toLocaleString("en-US")
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            <div className="rounded-md border  border-x-slate-100 h-fit bg-[#fffffd] border-b-slate-100 border-t-4 border-t-red-500 text-primary">
              <p className="text-xl font-bold px-2 py-3.5 border-b">Phạm lỗi</p>
              {Object.entries(discipline).map(([key, value], index) => (
                <div
                  key={index}
                  className="border-b-slate-200 flex justify-between px-2 py-2.5"
                >
                  <span className="text-md font-light">{key}</span>
                  <span className="text-md font-bold">
                    {typeof value === "number"
                      ? value.toLocaleString("en-US")
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
