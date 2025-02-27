import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MatchFixtures from "./MatchFixtures";
import MatchStats from "./MatchStats";
import MatchLineups from "./MatchLineups";
import MatchLatest from "./MatchLatest/MatchLatest";
import MatchEvents from "./MatchEvents";

export default function MatchDetails() {
  const [tab, setTab] = useState("MatchLatest");

  return (
    <div className="mt-10 mb-20">
      <div className="container m-auto">
        <div className="grid grid-cols-3 gap-6">
          {/* <div>{isLoading && <div>Loading</div>}</div> */}
          <div className="col-span-1">
            <MatchFixtures />
          </div>
          <div className="col-span-2">
            <MatchEvents />
            <div className="mt-6">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="me-2">
                  <a
                    className={`inline-block p-4 rounded-t-lg cursor-pointer ${
                      tab === "MatchLatest"
                        ? "text-blue-600 bg-gray-100"
                        : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setTab("MatchLatest")}
                  >
                    Mới nhất
                  </a>
                </li>
                <li className="me-2">
                  <a
                    className={`inline-block p-4 rounded-t-lg cursor-pointer ${
                      tab === "MatchLineups"
                        ? "text-blue-600 bg-gray-100"
                        : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setTab("MatchLineups")}
                  >
                    Đội hình
                  </a>
                </li>
                <li className="me-2">
                  <a
                    className={`inline-block p-4 rounded-t-lg cursor-pointer ${
                      tab === "MatchStats"
                        ? "text-blue-600 bg-gray-100"
                        : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setTab("MatchStats")}
                  >
                    Thống kê
                  </a>
                </li>
              </ul>
              <div>
                {tab === "MatchLatest" && <MatchLatest />}
                {tab === "MatchLineups" && <MatchLineups />}
                {tab === "MatchStats" && <MatchStats />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
