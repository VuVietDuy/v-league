import { Table, TableProps, Avatar } from "antd";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetcher from "@/api/fetcher";
import { ILineup } from "@/types/lineup";
import { IMatch } from "@/types/match";
import { queryKeys } from "@/api/queryKey";
import { renderPositionText } from "@/utils/renderPositionText";

export default function MatchLineups() {
  const { matchId } = useParams();

  const { data, refetch, isLoading } = useQuery<{
    match: IMatch;
    homeClubLineups: ILineup[];
    awayClubLineups: ILineup[];
  }>({
    queryKey: [queryKeys.GET_MATCH_LINEUPS, matchId],
    queryFn: async () =>
      fetcher(`matches/${matchId}/lineups`).then((res) => res.data),
    enabled: !!matchId,
  });

  const columns: TableProps<ILineup>["columns"] = [
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <>
          <Avatar
            className="mr-2"
            shape="square"
            size="large"
            src={record.player.imageURL}
          />
          <Link to={`/players/${record.id}`}>{record.player.name}</Link>
        </>
      ),
    },
    {
      title: "Số áo",
      dataIndex: "shirtNumber",
      key: "shirtNumber",
      render: (_, record) => <span>{record.player.shirtNumber}</span>,
    },
    {
      title: "Vị trí thi đấu",
      dataIndex: "position",
      key: "position",
      render: (_, record) => (
        <span>{renderPositionText(record.player.position)}</span>
      ),
    },
  ];

  if (isLoading) return <p>Đang tải...</p>;

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Home Club */}
      <div>
        <h2 className="text-xl font-bold mt-3 mb-2 flex justify-between">
          {data?.match?.homeClub?.name}
        </h2>
        <Table<ILineup>
          columns={columns}
          dataSource={
            data?.homeClubLineups?.filter((lineup) => lineup.isStarting) || []
          }
          pagination={false}
          rowKey="id"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mt-3 mb-2 flex justify-between">
          {data?.match?.awayClub?.name}
        </h2>
        <Table<ILineup>
          columns={columns}
          dataSource={
            data?.awayClubLineups?.filter((lineup) => lineup.isStarting) || []
          }
          pagination={false}
          rowKey="id"
        />
      </div>
    </div>
  );
}
