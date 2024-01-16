// import { QueryTypes } from 'sequelize';
import { IMatchModel } from '../Interfaces/matches/IMatchesModel';
import { IMatches } from '../Interfaces/matches/IMatches';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

import MatchModel from '../models/MatchModel';

class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) {}

  public async getAllMatches(query: string | undefined): Promise<ServiceResponse<IMatches[]>> {
    const inProgress = query ? { inProgress: JSON.parse(query) } : undefined;

    const allMatches = await this.matchModel.findAll(inProgress);

    return { status: 'SUCCESSFUL', data: allMatches };
  }
}

export default MatchService;
