import { ArrowRightOutlined } from "@ant-design/icons";
import squadBackground from "../assets/squad-bg.svg";
import { Link } from "react-router-dom";
import { renderPositionText } from "@/utils/renderPositionText";

const PlayerCard = (props: any) => {
  const { player } = props;
  return (
    <Link to={`/players/${player.id}`} className="border rounded">
      <div className="flex relative ">
        <div className="w-[100px] p-3">
          <p className="text-sm">Đã chơi</p>
          <p className="font-bold mb-2">{player.appearances}</p>
          <p className="text-sm">Ghi bàn</p>
          <p className="font-bold mb-2">{player.goals}</p>
          <p className="text-sm">Hỗ trọ</p>
          <p className="font-bold mb-2">{player.assists}</p>
          <p className="text-sm">Shots</p>
          <p className="font-bold mb-2">{player.shots}</p>
        </div>
        <div className="flex-1 w-[200px] h-[290px]">
          <img
            src={player.imageURL}
            className="w-full object-cover h-full"
            alt={player.name}
          />
        </div>
        <img
          className="absolute h-full top-0 left-0 right-0 bottom-0 -z-10"
          src={squadBackground}
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold mb-1">{player.name}</h3>
        <p className="mb-2">
          <strong>{1}</strong> {renderPositionText(player.position)} <br />
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/Flag_of_Vietnam.png" className="w-8" alt="" />
            <span className="text-[12px]">{player.nationality}</span>
          </div>
          <span className="">
            Xem thêm <ArrowRightOutlined className="text-[12px]" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
