import { IPlayer } from "@/types/player";
import { Divider, Table } from "antd";

const columns = [
  {
    title: "Mùa giải",
    key: "season",
    dataIndex: "season",
  },
  {
    title: "Câu lạc bộ",
    key: "club",
    dataIndex: "club",
    //   render: (_: any, record: any) => <span>{record.name}</span>,
  },
  {
    title: "Ra sân (Dự bị)",
    key: "apps",
    dataIndex: "apps",
  },
  {
    title: "Bàn thắng",
    key: "goals",
    dataIndex: "goals",
  },
];

const data = [
  {
    season: "2024/2024",
    club: "Công an Hà Nội",
    apps: "24 (0)",
    goals: 2,
  },
  {
    season: "2024/2024",
    club: "Công an Hà Nội",
    apps: "24 (0)",
    goals: 2,
  },
  {
    season: "2024/2024",
    club: "Công an Hà Nội",
    apps: "24 (0)",
    goals: 2,
  },
  {
    season: "2024/2024",
    club: "Công an Hà Nội",
    apps: "24 (0)",
    goals: 2,
  },
  {
    season: "2024/2024",
    club: "Công an Hà Nội",
    apps: "24 (0)",
    goals: 2,
  },
  {
    season: "2024/2024",
    club: "Công an Hà Nội",
    apps: "24 (0)",
    goals: 2,
  },
];

export const PlayerOverview = ({ player }: { player: IPlayer | undefined }) => {
  function formatBirthDate(date: Date | undefined): string {
    const now = new Date();
    const birthYear = date?.getFullYear();
    const birthMonth = date?.getMonth();
    const birthDay = date?.getDate();

    // Tính tuổi
    let age = now.getFullYear() - (birthYear ?? 0);
    if (
      birthMonth !== undefined &&
      birthDay !== undefined &&
      (now.getMonth() < birthMonth ||
        (now.getMonth() === birthMonth && now.getDate() < birthDay))
    ) {
      age--; // Chưa đến sinh nhật trong năm nay
    }

    // Format ngày tháng
    const formattedDate = date?.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return `${formattedDate} (${age})`;
  }

  return (
    <>
      {/* Right content  */}
      <div className="flex-1  flex text-primary flex-col col-span-8  lg:pl-6 p-0 min-h-[230px] ">
        {/* Personal Details  */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold my-3">Thông tin cá nhân</h3>
          <div className="rounded-md border grid grid-cols-3 border-slate-200 py-7 px-4">
            <div className=" col-span-1 px-2 flex justify-between border border-y-0 border-l-0 border-r-slate-200">
              <span className="text-sm font-light">Quốc tịch</span>
              <span className="text-md font-semibold">
                {player?.nationality}
              </span>
            </div>
            <div className=" col-span-1 px-2 flex justify-between border border-y-0 border-l-0 border-r-slate-200">
              <span className="text-sm font-light">Ngày sinh</span>
              <span className="text-md font-semibold">
                {formatBirthDate(new Date(player?.dateOfBirth))}
              </span>
            </div>
            <div className=" col-span-1 px-2 flex justify-between border border-y-0 border-l-0 border-r-slate-200">
              <span className="text-sm font-light">Chiều cao</span>
              <span className="text-md font-semibold">
                {player?.height + "cm"}
              </span>
            </div>
          </div>
        </div>

        {/* Career  */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold my-3">Sự nghiệp thi đấu</h3>
          <Table
            className="font-bold"
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey={"key"}
          ></Table>
        </div>
      </div>
    </>
  );
};
