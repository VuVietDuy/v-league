import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import ClubOverview from "./ClubOverview";
import ClubSquad from "./ClubSquad";
import ClubFixtures from "./ClubFixtures";
import ClubStadium from "./ClubStadium";
import ClubStats from "./ClubStats";
import { useEffect, useState } from "react";
import fetcher from "@/api/fetcher";
import { IClub } from "@/types/club";

function ClubDetail() {
  const { clubId } = useParams();
  const [clubData, setClubData] = useState<IClub>();

  useEffect(() => {
    fetcher.get(`/clubs/${clubId}`).then((res) => {
      setClubData(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className="container m-auto my-8">
        <div className="flex items-center mb-8">
          <img src={clubData?.logoURL} className="h-32 mr-6" alt="" />
          <div>
            <h2 className="font-bold text-4xl">{clubData?.name}</h2>
            <div>
              <span>{clubData?.stadium}</span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="me-2">
              <Link
                to={`/clubs/${clubId}`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `/clubs/${clubId}`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Thông tin chung
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/clubs/${clubId}/squad`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `/clubs/${clubId}/squad`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Cầu thủ
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/clubs/${clubId}/fixtures`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `/clubs/${clubId}/fixtures`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Lịch thi đấu
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/clubs/${clubId}/stadium`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `/clubs/${clubId}/stadium`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Sân vận động
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/clubs/${clubId}/stats`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `/clubs/${clubId}/stats`
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
      <div>
        <Routes>
          <Route path="" element={<ClubOverview />} />
          <Route path="squad" element={<ClubSquad />} />
          <Route path="fixtures" element={<ClubFixtures />} />
          <Route path="stadium" element={<ClubStadium />} />
          <Route path="stats" element={<ClubStats />} />
        </Routes>
      </div>
    </div>
  );
}

export default ClubDetail;
