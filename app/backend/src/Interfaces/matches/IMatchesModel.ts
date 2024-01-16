import { IMatches } from './IMatches';

export interface IMatchModel {
  findAll(): Promise<IMatches[]>,
  findFiltered(inProgress: boolean): Promise<IMatches[]>
}
