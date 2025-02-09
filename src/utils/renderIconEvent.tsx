import ballSmall from "@/assets/ball-small.svg";
import yellowCard from "@/assets/card-yellow.svg";
import subw from "@/assets/sub-w.svg";
import whistle from "@/assets/whistle.svg";

export function renderIconEvent(eventType: any, width: any = 3) {
  switch (eventType) {
    case "GOAL":
      return <img src={ballSmall} className={`w-${width}`} alt="" />;
    case "YELLOW_CARD":
      return <img src={yellowCard} className={`w-${width}`} alt="" />;
    case "SUBSTITUTION":
      return <img src={subw} className={`w-${width}`} alt="" />;
    case "OWN_GOAL":
      return <img src={ballSmall} className={`w-${width}`} alt="" />;
    case "RED_CARD":
      return <img src={subw} className={`w-${width}`} alt="" />;
    default:
      return <img src={whistle} className={`w-${width}`} alt="" />;
  }
}
