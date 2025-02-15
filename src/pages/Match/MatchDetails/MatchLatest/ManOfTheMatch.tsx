import { Avatar, Modal, Table } from "antd";
import { useState } from "react";
import fetcher from "@/api/fetcher";
import { useParams } from "react-router-dom";
import { renderPositionText } from "@/utils/renderPositionText";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";

interface IProps {
  open: any;
  onCancel: any;
}

export default function ManOfTheMatch(props: IProps) {
  const { open, onCancel } = props;
  const { matchId } = useParams();
  const [tab, setTab] = useState("PlayerStats");
  const { data: playersStats, refetch } = useQuery({
    queryKey: ["GET_MATCH_PLAYER_STATS"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/players/stats`).then((res) => {
        return res.data;
      }),
  });

  const {
    data: voteResult,
    refetch: refetchVoteResult,
    isLoading: isLoadingVoteResult,
  } = useQuery({
    queryKey: ["GET_MATCH_VOTES"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/votes`).then((res) => {
        return res.data;
      }),
  });

  console.log(voteResult);

  const manOfMatch = voteResult.playersVote[0];

  const user = useSelector((state: RootState) => state.user);

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

  if (isLoadingVoteResult) {
    return <Loading />;
  }
  return (
    <Modal open={open} onCancel={onCancel} footer={[]} width={1000}>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          {voteResult && playersStats && (
            <div className="bg-gray-100 rounded-2xl flex flex-col items-center justify-center p-4 mb-4 h-full">
              <div>
                <p className="uppercase test-white text-2xl font-semibold mb-4">
                  Cầu thủ xuất sắc
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded">
                  <img
                    className="w-full h-full"
                    src={manOfMatch.imageURL}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-8">
                    {manOfMatch.name.split(" ").slice(0, -1).join(" ")} <br />
                    <span className="text-7xl">
                      {
                        manOfMatch.name.split(" ")[
                          manOfMatch.name.split(" ").length - 1
                        ]
                      }
                    </span>
                  </h2>

                  <span className="font-bold mr-3 text-4xl">
                    {manOfMatch.shirtNumber}
                  </span>
                  <span className="text-2xl">
                    {renderPositionText(manOfMatch.position)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <div className="flex justify-center mb-3">
            <button
              onClick={() => setTab("PlayerStats")}
              className={`px-5 py-3 font-semibold rounded-l ${
                tab === "PlayerStats"
                  ? "bg-purple-950 text-white"
                  : "bg-gray-100 text-purple-950"
              }`}
            >
              Thống kê
            </button>
            <button
              onClick={() => setTab("VoteResult")}
              className={`px-5 py-3 font-semibold rounded-r ${
                tab === "VoteResult"
                  ? "bg-purple-950 text-white"
                  : "bg-gray-100 text-purple-950"
              }`}
            >
              Bình chọn
            </button>
          </div>
          {tab === "VoteResult" ? (
            <div>
              <Table
                className="font-bold"
                columns={columns}
                dataSource={voteResult?.playersVote.slice(0, 5)}
                pagination={false}
                rowKey={"key"}
              ></Table>
              <p className="text-center mt-2">
                {voteResult?.totalVotes} bình chọn
              </p>
            </div>
          ) : (
            <div className="flex ">
              {playersStats && (
                <div className="flex-grow">
                  <div className="h-36 flex justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex flex-col justify-between">
                      <h2 className="text-xl font-bold">
                        {manOfMatch?.name.split(" ").slice(0, -1).join(" ")}{" "}
                        <br />
                        <span className="text-3xl">
                          {manOfMatch?.name.split(" ").reverse()[0]}{" "}
                        </span>
                      </h2>
                      <p>{renderPositionText(manOfMatch?.position)}</p>
                    </div>
                    <div className="h-full w-28 bg-gray-200 overflow-hidden border rounded">
                      <img
                        className="object-cover h-full w-full"
                        src={manOfMatch?.imageURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                      <span>Bàn thắng</span>
                      <span className="font-bold">{manOfMatch?.goals}</span>
                    </div>
                    <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                      <span>Hỗ trợ</span>
                      <span className="font-bold">{manOfMatch?.assists}</span>
                    </div>
                    <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                      <span>Tạo ra cơ hội</span>
                      <span className="font-bold">{manOfMatch?.keyPasses}</span>
                    </div>
                    <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                      <span>Hỗ trợ nổi bật</span>
                      <span className="font-bold">
                        {manOfMatch?.successfulDribbles}
                      </span>
                    </div>
                    <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                      <span>Dứt điểm trúng đích</span>
                      <span className="font-bold">
                        {manOfMatch?.shotsOnTarget}
                      </span>
                    </div>
                    <div className="flex justify-between text-base px-5 py-3 border border-t-0">
                      <span>Cứu thua</span>
                      <span className="font-bold">{manOfMatch?.saves}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
