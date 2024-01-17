import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';
import ILeaderboardModel from '../Interfaces/leaderboard/ILeaderboardModel';
import LeaderboardModel from '../models/LeaderboardModel';

class LeaderboardService {
  constructor(
    private leaderboardModel: ILeaderboardModel = new LeaderboardModel(),
  ) {}

  async leaderboardHome(): Promise<ServiceResponse<ILeaderboard[]>> {
    const data = await this.leaderboardModel.leaderboardHome() as unknown as ILeaderboard[];
    return { status: 'SUCCESSFUL', data };
  }
}

export default LeaderboardService;
