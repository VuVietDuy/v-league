import React from "react";

function PlayerList() {
  return (
    <div className="">
      <div className="container m-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Cầu thủ
              </th>
              <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                Vị trí
              </th>
              <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                Câu lạc bộ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td scope="col" className="px-6 py-4">
                Vũ Viết Duy
              </td>
              <td scope="col" className="px-6 py-4 hidden sm:table-cell">
                Thu mon
              </td>
              <td scope="col" className="px-6 py-4 hidden sm:table-cell">
                Mancheter city
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayerList;
