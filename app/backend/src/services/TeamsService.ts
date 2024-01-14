import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ITeams from '../Interfaces/teams/ITeams';
// import { NewEntity } from '../Interfaces/index';
import TeamsModel from '../models/TeamsModel';
import { ITeamsModel } from '../Interfaces/teams/ITeamsModel';

export default class TeamsService {
  constructor(
    private teamsModel: ITeamsModel = new TeamsModel(),
  ) {}

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.teamsModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.teamsModel.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found in the db` } };

    return { status: 'SUCCESSFUL', data: team };
  }
}
