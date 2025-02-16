import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import VoteManOfMatch from "./VoteManOfMatch";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { renderIconEvent } from "@/utils/renderIconEvent";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ManOfTheMatch from "./ManOfTheMatch";
import { renderPositionText } from "@/utils/renderPositionText";
import Loading from "@/components/Loading";
import { Image } from "antd";

interface IProps {}

export default function MatchLatest(props: IProps) {
  const [isTimeVote, setIsTimeVote] = useState(true);
  const [isOpenVoteModal, setIsOpenVoteModal] = useState(false);
  const [isOpenManOfTheMatch, setIsOpenManOfTheMatch] = useState(false);
  const { matchId } = useParams();
  const { data: match, isLoading } = useQuery({
    queryKey: ["GET_MATCH_EVENTS_LATEST"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/events`).then((res) => res.data),
  });

  const { data: voteResult, refetch: refetchVoteResult } = useQuery({
    queryKey: ["GET_MATCH_VOTES"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/votes`).then((res) => {
        return res.data;
      }),
  });

  const { data: matchImages } = useQuery({
    queryKey: ["GET_MATCH_IMAGES"],
    queryFn: () =>
      fetcher.get(`matches/${matchId}/images`).then((res) => res.data),
  });

  const user = useSelector((state: RootState) => state.user);

  const onClose = () => {
    setIsOpenVoteModal(false);
  };

  const onOpen = () => {
    setIsOpenVoteModal(true);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-7 p-4">
          {voteResult && (
            <div className="bg-gray-100 rounded-2xl flex flex-col items-center p-4 mb-4">
              <p className="uppercase test-white text-xl font-semibold">
                Cầu thủ xuất sắc
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <img
                    className="w-full h-52 object-cover rounded border"
                    src={voteResult.playersVote[0].imageURL}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="mb-2 text-2xl font-bold">
                      {voteResult.playersVote[0].name}
                    </h1>
                    <span className="font-bold mr-3">
                      {voteResult.playersVote[0].shirtNumber}
                    </span>
                    <span>
                      {renderPositionText(voteResult.playersVote[0].position)}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpenManOfTheMatch(true)}
                    className="px-8 py-2 rounded bg-purple-950 text-white"
                  >
                    Xem thêm
                    <ArrowRightOutlined className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {isTimeVote && (
            <button
              disabled={user.id ? false : true}
              onClick={onOpen}
              className="w-full py-2 rounded-xl border"
            >
              {user.id ? "Bình trọn" : "Đăng nhập để bình chọn"}
            </button>
          )}
          <div>
            <h2 className="font-bold text-xl my-4">Tường thuật trực tiếp</h2>
            <div>
              {match.events.map((event: any, index: number) => (
                <div
                  className="border rounded-lg flex items-center mb-3"
                  key={index}
                >
                  <div className="w-24 h-10 flex flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center mr-2">
                      {renderIconEvent(event.eventType, 5)}
                    </div>
                    <div className="flex items-center">
                      <span>{event.eventTime}'</span>
                    </div>
                  </div>
                  <div>
                    <p className="py-3">
                      {event.player.name} ({event.club.name}) {event?.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col gap-4 p-4">
          {matchImages &&
            matchImages.map((matchImage: any, index: any) => (
              <Image
                src={matchImage.imageURL}
                className="rounded-2xl h-[200px] object-cover"
                key={index}
              ></Image>
            ))}
        </div>
      </div>
      <VoteManOfMatch
        open={isOpenVoteModal}
        onClose={onClose}
        onCancel={onClose}
      />
      <ManOfTheMatch
        open={isOpenManOfTheMatch}
        onCancel={() => setIsOpenManOfTheMatch(false)}
      />
    </div>
  );
}
