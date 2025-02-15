export interface ISeason {
  id: number;
  name: string;
  logoURL: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  tournamentId: string;
}
