import { useEffect, useState } from "react";
import { IPlayer } from "../../types/player";
import fetcher from "../../api/fetcher";
import { Link } from "react-router-dom";

export default function PlayerDetails() {
  const [player, setPlayer] = useState<IPlayer>();
  useEffect(() => {
    fetcher.get("players/1").then((res) => {
      setPlayer(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <div className="container m-auto grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <div className="pl-20">
            {player && <img className="w-full" src={player?.imageURL} alt="" />}
          </div>
        </div>
        <div className="col-span-3 flex flex-col ">
          <div className="flex-1 flex justify-between items-center">
            <p className="text-5xl align-middle">{player?.name}</p>
            <p className="text-[200px] font-bold">{player?.shirtNumber}</p>
          </div>
          <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="me-2">
                <Link
                  to={`/`}
                  className={`inline-block p-4 rounded-t-lg ${
                    location.pathname === `/clubs`
                      ? "text-blue-600 bg-gray-100"
                      : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                >
                  Mới nhất
                </Link>
              </li>
              <li className="me-2">
                <Link
                  to={`/`}
                  className={`inline-block p-4 rounded-t-lg ${
                    location.pathname === `/clubs`
                      ? "text-blue-600 bg-gray-100"
                      : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                >
                  Đội hình
                </Link>
              </li>
              <li className="me-2">
                <Link
                  to={`/`}
                  className={`inline-block p-4 rounded-t-lg ${
                    location.pathname === `/clubs`
                      ? "text-blue-600 bg-gray-100"
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
  );
}
