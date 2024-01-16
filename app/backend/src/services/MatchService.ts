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
    const allMatches = query ? await this.matchModel.findFiltered(JSON.parse(query))
      : await this.matchModel.findAll();

    return { status: 'SUCCESSFUL', data: allMatches };
  }
}

export default MatchService;
