import { IPlayer } from "@/types/player";
import { DownOutlined, ReloadOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
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

export const PlayerStats = ({ player }: { player: IPlayer | undefined }) => {
  return (
    <>
      {/* Right content  */}
      <div className="flex-1  flex flex-col col-span-8 mt-5 lg:pl-10 p-0 min-h-[230px] ">
        <div className="flex justify-between border rounded-sm">
          <Dropdown
            menu={{
              items: [
                {
                  key: 1,
                  label: "2024/25",
                },
                {
                  key: 2,
                  label: "2023/24",
                },
                {
                  key: 3,
                  label: "2022/23",
                },
                {
                  key: 4,
                  label: "2021/22",
                },
              ],
            }}
          >
            <div
              className="w-fit px-3 py-2 flex gap-8 border-r"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <p className="text-[10px]">Lọc theo mùa giải</p>
                <p>2024/25</p>
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
        <div className="grid grid-cols-8 gap-3 mt-10">
          {cardData.map((item, index) => {
            return (
              <div
                key={index}
                className="p-4 col-span-5 sm:col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border"
              >
                <p className="text-md font-light mb-3.5 text-primary">
                  {item.label}
                </p>
                <p className="md:text-5xl text-4xl font-bold text-primary">
                  {" "}
                  {item.value.toLocaleString("en-US")}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-2.5 mt-10">
          <div className="col-span-2 text-primary">
            <div className="rounded-md border  border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-green-500">
              <p className="text-xl font-bold px-2 py-3.5 border-b">Tấn công</p>
              {Object.entries(attack).map(([key, value], index) => (
                <div
                  key={index}
                  className=" border-b-slate-200 flex justify-between px-2 py-2.5"
                >
                  <span className="text-md font-light">{key}</span>
                  <span className="text-md font-bold">
                    {" "}
                    {typeof value === "number"
                      ? value.toLocaleString("en-US")
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <div className="rounded-md border  border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-green-500 text-primary">
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
          <div className="col-span-2">
            <div className="rounded-md border  border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-green-500 text-primary">
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
          <div className="col-span-2">
            <div className="rounded-md border  border-x-slate-100 bg-[#fffffd] border-b-slate-100 border-t-4 border-t-green-500 text-primary">
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
    </>
  );
};
