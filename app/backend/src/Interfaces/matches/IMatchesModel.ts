import { IMatchScoreboard, IMatches } from './IMatches';

export interface IMatchModel {
  findAll(): Promise<IMatches[]>,
  findFiltered(inProgress: boolean): Promise<IMatches[]>
  finishMatch(id: number): Promise<void>
  updateMatch(id: number, scoreboard: IMatchScoreboard): Promise<void>
}
