import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Overview from "./DetailsClub/Overview";
import Squad from "./DetailsClub/Squad";
import Fixtures from "./DetailsClub/Fixtures";
import Stadium from "./DetailsClub/Stadium";
import Stats from "./DetailsClub/Stats";

function DetailsClub() {
  const location = useLocation(); // Get the current location

  // Define the base URL for your tabs
  const basePath = "/clubs/1";

  return (
    <div className="h-[2000px]">
      <div className="container m-auto mb-8">
        <div className="flex items-center mb-8">
          <img src="/images/ha-tinh.png" className="h-32 mr-6" alt="" />
          <div>
            <h2 className="font-bold text-4xl">Ha Tinh FC</h2>
            <div>
              <span>SVĐ Thanh Hóa </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="me-2">
              <Link
                to={`${basePath}`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `${basePath}`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Thông tin chung
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`${basePath}/squad`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `${basePath}/squad`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Cầu thủ
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`${basePath}/fixtures`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `${basePath}/fixtures`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Lịch thi đấu
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`${basePath}/stadium`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `${basePath}/stadium`
                    ? "text-blue-600 bg-gray-100"
                    : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Sân vận động
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`${basePath}/stats`}
                className={`inline-block p-4 rounded-t-lg ${
                  location.pathname === `${basePath}/stats`
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
          <Route path="" element={<Overview />} />
          <Route path="squad" element={<Squad />} />
          <Route path="fixtures" element={<Fixtures />} />
          <Route path="stadium" element={<Stadium />} />
          <Route path="stats" element={<Stats />} />
        </Routes>
      </div>
    </div>
  );
}

export default DetailsClub;
