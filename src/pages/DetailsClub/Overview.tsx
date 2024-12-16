import { ArrowRightOutlined } from "@ant-design/icons";
import LatestNews from "../../components/LatestNews";
import MatchFixture from "../../components/MatchFixture";

function Overview() {
  return (
    <div className="flex container m-auto">
      <div className="min-w-[326px] ">
        <div className="rounded-xl overflow-hidden border">
          <div className="py-4 bg-blue-500">
            <p className="text-center font-bold text-xl">Trận đấu tuần này</p>
          </div>
          <div className="mb-2">
            <time className="block text-purple-950 font-medium text-center">
              Saturday 9 November
            </time>
          </div>
          <div>
            <MatchFixture />
            <MatchFixture />
            <MatchFixture />
            <MatchFixture />
            <MatchFixture />
            <MatchFixture />
            <MatchFixture />
            <MatchFixture />
          </div>
          <div className="p-2">
            <button className="global-button">
              Xem thêm
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className="grow pl-6">
        <LatestNews />
      </div>
    </div>
  );
}

export default Overview;
