import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { PlayerOverview } from "./PlayerOverview";
import { PlayerStats } from "./PlayerStats";
import fetcher from "@/api/fetcher";
import Loading from "@/components/Loading";
import { renderPositionText } from "@/utils/renderPositionText";

export default function PlayerDetails() {
  const { playerId } = useParams();
  const location = useLocation();
  const { data: player, isLoading } = useQuery({
    queryKey: ["GET_DETAILS_PLAYER"],
    queryFn: () =>
      fetcher.get(`players/${playerId}/stats`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container m-auto grid grid-cols-4 h-fit pb-10 mb-20">
      <div className="col-span-4 flex   items-end   ">
        <div className=" w-[150px] md:w-[330px] justify-end">
          <div className="w-[150px] h-[150px] md:w-[230px] md:h-[230px]  lg:ml-20 shadow-xl rounded-lg overflow-hidden    mt-10 ">
            {
              <img
                className="w-full h-full object-cover"
                src={player?.imageURL}
                alt=""
              />
            }
          </div>
        </div>

        <div className="flex-1 flex flex-col  pl-6  ">
          <div className="flex flex-1 h-[230px] justify-between items-center   ">
            <p className=" text-3xl md:text-5xl align-middle ">{player.name}</p>
            <p className="text-[135px] md:text-[180px] leading-[180px] font-bold">
              {player?.shirtNumber}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <ul className="flex overflow-auto text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="me-2">
                  <Link
                    to={`/players/${player?.id}/overview`}
                    className={`inline-block text-primary p-4 rounded-t-lg ${
                      location.pathname === `/players/${player?.id}/overview`
                        ? "text-blue-600 bg-purple-100"
                        : "hover:text-gray-600 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                  >
                    Thông tin chung
                  </Link>
                </li>

                <li className="me-2">
                  <Link
                    to={`/players/${player?.id}/stats`}
                    className={`inline-block text-primary  p-4 rounded-t-lg ${
                      location.pathname === `/players/${player?.id}/stats`
                        ? "text-blue-600 bg-purple-100"
                        : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                  >
                    Thống kê
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom  */}
      <div className="col-span-4 flex   items-start   ">
        {/* Left content  */}
        <div className=" w-0 lg:w-[330px] h-fit  relative ">
          <div className="lg:block hidden absolute -top-10 p-4 left-10 w-24 h-24 rounded-full bg-slate-50 shadow-md">
            <img
              src={player?.club?.logoURL}
              alt="avatar"
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <div className="lg:block hidden rounded-md border mt-28 py-2 text-primary">
            <div className="border border-x-0 border-t-0 border-b-slate-200 px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Câu lạc bộ</span>
              <span className="text-md font-semibold">
                {player?.club?.name}
              </span>
            </div>
            <div className=" px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Vị trí</span>
              <span className="text-md font-semibold">
                {renderPositionText(player?.position)}
              </span>
            </div>

            <div className=" px-4 py-2.5 flex flex-col gap-2 items-start justify-between">
              <span className="text-md font-light">
                Theo dõi
                <span className="text-md ml-2">{player?.name + " "}</span>
              </span>
              <div className="flex items-center gap-3 ">
                <Link
                  className="text-gray-700 hover:text-primary p-1.5 border rounded flex items-center justify-center"
                  to={player?.instagram}
                >
                  <InstagramOutlined className="text-2xl" />
                </Link>
                <Link
                  className="text-gray-700 hover:text-primary p-1.5 border rounded flex items-center justify-center"
                  to={player?.facebook}
                >
                  <FacebookOutlined className="text-2xl" />
                </Link>
              </div>
            </div>

            {/* League record  */}
            <p className="text-xl font-bold px-2 mt-3">Thông số giải đấu</p>
            <div className=" px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Ra sân</span>
              <span className="text-md font-semibold">
                {player.appearances}
              </span>
            </div>
            <div className=" px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Bàn thắng</span>
              <span className="text-md font-semibold">{player.goals}</span>
            </div>
            <div className=" px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Kiến tạo</span>
              <span className="text-md font-semibold">{player.assists}</span>
            </div>
            <div className=" px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Giữ sạch lưới</span>
              <span className="text-md font-semibold">
                {player.cleanSheets}
              </span>
            </div>

            {/* Awards  */}
            <p className="text-xl font-bold px-2 mt-3">
              Giải thương và vinh danh
            </p>
            <div className=" px-4 py-2.5 flex items-center justify-between">
              <span className="text-md font-light">Quả bóng vàng</span>
              <span className="text-md font-semibold">{2024}</span>
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/*"
            element={<PlayerOverview player={player || undefined} />}
          />
          <Route
            path="/stats"
            element={<PlayerStats player={player || undefined} />}
          />
        </Routes>
      </div>
    </div>
  );
}
