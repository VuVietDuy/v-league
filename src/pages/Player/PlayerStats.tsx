import { DownOutlined, ReloadOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";

export const PlayerStats = ({ player }: { player: any }) => {
  const cardData = [
    {
      label: "Số trận thi đấu",
      value: player.appearances,
    },
    {
      label: "Số trận thắng",
      value: player.wins,
    },
    {
      label: "Số trận thua",
      value: player.losses,
    },
    {
      label: "Bàn thắng",
      value: player.goals,
    },
  ];
  const attack = {
    "Bàn thắng": player.goals,
    "Bàn thắng mỗi trận": player.goalPerMatch,
    "Số lần dứt điểm": player.shots,
    "Dứt điểm trúng đích": player.shotsOnTarget,
    "Dứt điểm chính xác": `${player.shootingAccuracy}%`,
    "Bàn thắng penalty": 86,
    "Cơ hội tạo ra": player.keyPass,
    "Bóng chạm khung thành": 30,
  };
  const teamPlay = {
    "Số đường chuyền": 377,
    "Đường chuyền mỗi trận": 39,
    "Chuyền chính xác": "84%",
    "Số lần tạt bóng": 127,
    "Tạt bóng chính xác": "21%",
  };
  const defence = {
    "Số trận sạch lưới": player.cleanSheets,
    "Số bàn thua": player.cleanSheets,
    "Bàn thua mỗi trận": 0.99,
    "Cứu thua": 174,
    "Tắc bóng": 1318,
    "Tắc bóng thành công": "70%",
    "Cản phá cú sút": 287,
    "Truy cản": 287,
    "Phá bóng": 178,
    "Phá bóng bằng đầu": 67,
    "Tranh chấp tay đôi": 413,
    "Phạm lỗi dẫn đén bàn thua": 19,
    "Phản lưới": 0,
  };
  const discipline = {
    "Thẻ vàng": player.yellowCard,
    "Thẻ đỏ": player.redCard,
    "Phạm lỗi": 247,
    "Việt vị": 159,
  };
  return (
    <>
      {/* Right content  */}
      <div className="flex-1 px-2 md:px-0 flex flex-col col-span-8 mt-5 lg:pl-10 p-0 min-h-[230px] ">
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
                className="p-4 col-span-4 md:col-span-2 rounded-md bg-[#fffffd] border"
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
          <div className="col-span-4 md:col-span-2 text-primary">
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

          <div className="col-span-4 md:col-span-2 text-primary">
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
          <div className="col-span-4 md:col-span-2 text-primary">
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
