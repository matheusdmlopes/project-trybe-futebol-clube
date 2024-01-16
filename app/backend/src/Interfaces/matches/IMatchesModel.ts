import { IMatches } from './IMatches';

export interface IMatchModel {
  findAll(inProgress: Pick<IMatches, 'inProgress'> | undefined): Promise<IMatches[]>,
}
