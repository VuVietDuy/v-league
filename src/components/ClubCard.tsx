import { ArrowRightOutlined } from "@ant-design/icons";
import PatternZigzag from "./PatternZigzag";
import { IClub } from "../types/club";

interface IProps {
  club: IClub;
}

function ClubCard(props: IProps) {
  const { club } = props;
  return (
    <a href="/clubs/1" className="block border rounded-md relative">
      <div className="absolute top-0 bottom-0">
        <PatternZigzag />
      </div>
      <div className="relative p-2">
        <div className="h-20 overflow-hidden">
          <img src={club.logoURL} className="h-full" alt="" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="font-bold text-lg">{club.name}</h2>
          <ArrowRightOutlined className="text-[12px]" />
        </div>
      </div>
    </a>
  );
}

export default ClubCard;
