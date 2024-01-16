import { IMatches } from './IMatches';

export interface IMatchModel {
  findAll(): Promise<IMatches[]>,
}
