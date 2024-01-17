import { IMatchScoreboard, IMatches, IMatchCreate } from './IMatches';

export interface IMatchModel {
  findAll(): Promise<IMatches[]>,
  findFiltered(inProgress: boolean): Promise<IMatches[]>
  finishMatch(id: number): Promise<void>
  updateMatch(id: number, scoreboard: IMatchScoreboard): Promise<void>
  findMatchById(id: number): Promise<IMatches | null>
  createMatch(matchData: IMatchCreate): Promise<IMatches>,
}
