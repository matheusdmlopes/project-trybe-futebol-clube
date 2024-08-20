// import { QueryTypes } from 'sequelize';
import { IMatchModel } from '../Interfaces/matches/IMatchesModel';
import { IMatchCreate, IMatchScoreboard, IMatches } from '../Interfaces/matches/IMatches';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';

import MatchModel from '../models/MatchModel';
import { ITeamsModel } from '../Interfaces/teams/ITeamsModel';
import TeamsModel from '../models/TeamsModel';

class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamsModel = new TeamsModel(),
  ) {}

  public async getAllMatches(query: string | undefined): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = query ? await this.matchModel.findFiltered(JSON.parse(query))
      : await this.matchModel.findAll();

    return { status: 'SUCCESSFUL', data: allMatches };
  }

  async finishMatch(id: string): Promise<ServiceResponse<ServiceMessage>> {
    await this.matchModel.finishMatch(Number(id));

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  async updateMatch(
    id: string,
    scoreboard: IMatchScoreboard,
  ): Promise<ServiceResponse<IMatchScoreboard>> {
    const match = await this.matchModel.findMatchById(Number(id));

    if (!match) return { status: 'NOT_FOUND', data: { message: 'Match not found' } };

    if (!match.inProgress) {
      return { status: 'UNAUTHORIZED', data: { message: 'Match not finished' } };
    }
    await this.matchModel.updateMatch(Number(id), scoreboard);

    return { status: 'SUCCESSFUL', data: scoreboard };
  }

  async createMatch(data: IMatchCreate): Promise<ServiceResponse<IMatches | ServiceMessage>> {
    const { homeTeamId, awayTeamId } = data;

    const homeTeam = await this.teamModel.findById(homeTeamId);
    const awayTeam = await this.teamModel.findById(awayTeamId);

    if (!homeTeam || !awayTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }

    const match = await this.matchModel.createMatch(data);

    return { status: 'CREATED', data: match };
  }
}

export default MatchService;
