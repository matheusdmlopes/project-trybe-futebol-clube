import { IMatches } from '../Interfaces/matches/IMatches';

import { IMatchModel } from '../Interfaces/matches/IMatchesModel';
import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';

class MatchModel implements IMatchModel {
  private model = SequelizeMatches;

  async findAll(): Promise<IMatches[]> {
    const data = await this.model.findAll({
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return data;
  }

  async findFiltered(inProgress: boolean): Promise<IMatches[]> {
    const data = await this.model.findAll({
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: { inProgress },
    });
    return data;
  }
}

export default MatchModel;
