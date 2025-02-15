import { IMatch } from "@/types/match";
import { Tooltip } from "antd";

function FormItem({ match, clubId }: { match: IMatch; clubId: number }) {
  let status = "B";
  if (match.homeScore > match.awayScore && clubId === match.homeClubId) {
    status = "T";
  }
  if (match.homeScore < match.awayScore && clubId === match.awayClubId) {
    status = "T";
  }
  if (match.homeScore === match.awayScore) {
    status = "H";
  }
  return (
    <Tooltip color="white" title={<div></div>}>
      <div
        className={`rounded-full w-7 h-7  flex justify-center items-center 
        ${status === "T" && "bg-green-500"} 
        ${status === "B" && "bg-red-500"} 
        ${status === "H" && "bg-gray-400"}`}
      >
        <span className="text-sm font-bold text-white">{status}</span>
      </div>
    </Tooltip>
  );
}

export default FormItem;
