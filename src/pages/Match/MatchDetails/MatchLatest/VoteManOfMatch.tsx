import { Avatar, Modal, Table } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import fetcher from "@/api/fetcher";
import { useParams } from "react-router-dom";
import { renderPositionText } from "@/utils/renderPositionText";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  open: any;
  onClose: any;
  onCancel: any;
}

export default function VoteManOfMatch(props: IProps) {
  const { open, onClose, onCancel } = props;
  const { matchId } = useParams();
  const [playerIndex, setPlayerIndex] = useState(0);
  const { data: playersStats, refetch } = useQuery({
    queryKey: ["GET_MATCH_PLAYER_STATS"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/players/stats`).then((res) => {
        return res.data;
      }),
  });

  const { data: voteResult, refetch: refetchVoteResult } = useQuery({
    queryKey: ["GET_MATCH_VOTES"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/votes`).then((res) => {
        return res.data;
      }),
  });

  const user = useSelector((state: RootState) => state.user);

  const handleVote = () => {
    if (matchId) {
      const data = {
        userId: user.id,
        matchId: parseInt(matchId),
        playerId: playersStats[playerIndex].id,
      };
      fetcher.post(`matches/${matchId}/votes`, data).then((res) => {
        refetch();
        refetchVoteResult();
      });
    }
  };

  const handleCancelVote = () => {};

  const columns = [
    {
      title: "Xếp hạng",
      key: "pos",
      dataIndex: "pos",
    },
    {
      title: "Cầu thủ",
      key: "player",
      dataIndex: "player",
      render: (_: any, record: any) => <span>{record.name}</span>,
    },
    {
      title: "Đội bóng",
      key: "club",
      dataIndex: "club",
      render: (_: any, record: any) => (
        <Avatar size={"large"} src={record.club.logoURL}></Avatar>
      ),
    },
    {
      title: "Bình chọn %",
      key: "votePercen",
      dataIndex: "votePercen",
      render: (value: any) => <span>{value}%</span>,
    },
  ];
  return (
    <Modal
      open={open}
      onClose={onClose}
      onCancel={onCancel}
      footer={[]}
      width={1000}
      title={"Cổng bình chọn"}
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1 pr-5">
          <Table
            className="font-bold"
            columns={columns}
            dataSource={voteResult?.playersVote.slice(0, 6)}
            pagination={false}
            rowKey={"key"}
          ></Table>
          <p className="text-center mt-2">{voteResult?.totalVotes} bình chọn</p>
        </div>
        <div className="col-span-1">
          <div className="flex ">
            <div
              onClick={() => setPlayerIndex((pre) => pre - 1)}
              className="w-8 flex items-center justify-center hover:cursor-pointer"
            >
              <LeftOutlined className="text-2xl" />
            </div>
            {playersStats && (
              <div className="flex-grow">
                <div className="h-36 flex justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex flex-col justify-between">
                    <h2 className="text-xl font-bold">
                      {playersStats[playerIndex]?.name
                        .split(" ")
                        .slice(0, -1)
                        .join(" ")}{" "}
                      <br />
                      <span className="text-3xl">
                        {
                          playersStats[playerIndex]?.name
                            .split(" ")
                            .reverse()[0]
                        }{" "}
                      </span>
                    </h2>
                    <p>
                      {renderPositionText(playersStats[playerIndex]?.position)}
                    </p>
                  </div>
                  <div className="h-full w-28 bg-gray-200">
                    <img src={playersStats[playerIndex]?.imageURL} alt="" />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                    <span>Bàn thắng</span>
                    <span className="font-bold">
                      {playersStats[playerIndex]?.goals}
                    </span>
                  </div>
                  <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                    <span>Hỗ trợ</span>
                    <span className="font-bold">
                      {playersStats[playerIndex]?.assists}
                    </span>
                  </div>
                  <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                    <span>Tạo ra cơ hội</span>
                    <span className="font-bold">
                      {playersStats[playerIndex]?.keyPasses}
                    </span>
                  </div>
                  <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                    <span>Hỗ trợ nổi bật</span>
                    <span className="font-bold">
                      {playersStats[playerIndex]?.successfulDribbles}
                    </span>
                  </div>
                  <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                    <span>Dứt điểm trúng đích</span>
                    <span className="font-bold">
                      {playersStats[playerIndex]?.shotsOnTarget}
                    </span>
                  </div>
                  <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                    <span>Cứu thua</span>
                    <span className="font-bold">
                      {playersStats[playerIndex]?.saves}
                    </span>
                  </div>
                </div>
                <div>
                  {playersStats[playerIndex]?.votes.length > 0 &&
                  playersStats[playerIndex].votes.find(
                    (vote: any) => vote?.userId === user.id
                  ) ? (
                    <button
                      onClick={handleCancelVote}
                      className="w-full py-2 rounded-lg border bg-gray-500 text-white font-bold"
                    >
                      Hủy bình trọn
                    </button>
                  ) : (
                    <button
                      onClick={handleVote}
                      className="w-full py-2 rounded-lg border bg-blue-500 text-white font-bold"
                    >
                      Bình trọn
                    </button>
                  )}
                </div>
              </div>
            )}

            <div
              onClick={() => setPlayerIndex((pre) => pre + 1)}
              className="w-8 flex items-center justify-center hover:cursor-pointer"
            >
              <RightOutlined className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
