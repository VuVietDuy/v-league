import { IClub } from "./club";
import { IEvent } from "./event";

export interface IMatch {
  id?: number;
  homeClub: IClub;
  homeClubId: number;
  awayClubId: number;
  awayClub: IClub;
  homeScore: number;
  awayScore: number;
  stadium?: string;
  date: Date;
  time?: string;
  events?: IEvent[];
}
