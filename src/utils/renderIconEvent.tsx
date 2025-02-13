import ballSmall from "@/assets/ball-small.svg";
import yellowCard from "@/assets/card-yellow.svg";
import subw from "@/assets/sub-w.svg";
import whistle from "@/assets/whistle.svg";

function renderIcon(eventType: any) {
  switch (eventType) {
    case "GOAL":
      return <img src={ballSmall} alt="" />;
    case "YELLOW_CARD":
      return <img src={yellowCard} alt="" />;
    case "SUBSTITUTION":
      return <img src={subw} alt="" />;
    case "OWN_GOAL":
      return <img src={ballSmall} alt="" />;
    case "RED_CARD":
      return <img src={subw} alt="" />;
    default:
      return <img src={whistle} alt="" />;
  }
}

export function renderIconEvent(eventType: any, width: any) {
  return (
    <div className={`w-${width} flex items-center`}>
      {renderIcon(eventType)}
    </div>
  );
}
