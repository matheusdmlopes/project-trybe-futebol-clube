export interface IMatches {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export type IMatchScoreboard = Pick<IMatches, 'homeTeamGoals' | 'awayTeamGoals'>;
export type IMatchCreate = Omit<IMatches, 'id' | 'inProgress'>;
