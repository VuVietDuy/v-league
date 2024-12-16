// Bảng xếp hạng
import { Club } from "./club";
import { Form } from "./form";

export interface LeagueTable {
  position: number;
  club: Club;
  played: number;
  won?: number;
  drawn: number;
  lost: number;
  GF: number;
  GA: number;
  points: number;
  form: Form[];
}
