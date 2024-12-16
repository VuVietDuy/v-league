import { Club } from "../types/club";
import { ArrowRightOutlined } from "@ant-design/icons";

interface IProps {
  club: Club;
}

function ClubCard(props: IProps) {
  const { club } = props;
  return (
    <a href="/clubs/1" className="block border p-2 rounded-md">
      <div className="h-20 overflow-hidden">
        <img src={club.logoUrl} className="h-full" alt="" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="font-bold text-lg">{club.name}</h2>
        <ArrowRightOutlined className="text-[12px]" />
      </div>
    </a>
  );
}

export default ClubCard;
