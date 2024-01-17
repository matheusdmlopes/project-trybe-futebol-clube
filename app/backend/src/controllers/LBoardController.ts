import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import LeaderboardService from '../services/LeaderboardService';

class LBoardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) {}

  async leaderboardHome(req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.leaderboardHome();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}

export default LBoardController;
