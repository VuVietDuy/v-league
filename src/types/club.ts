import { IPlayer } from "./player";

export interface IClub {
  id: number;
  name: string;
  shortName: string;
  coach: string;
  stadium: string;
  logoURL: string;
  bio: string;
  stadiumDescription: string;
  stadiumAddress: string;
  stadiumMap: string;
  stadiumCapacity: number;
  foundedYear: string;
  players: IPlayer[];
}
