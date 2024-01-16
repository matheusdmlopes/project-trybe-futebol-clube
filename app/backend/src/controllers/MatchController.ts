import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchService from '../services/MatchService';

class MatchesController {
  constructor(
    private matchService = new MatchService(),
  ) {}

  public async getAllMatches(_req: Request, res: Response) {
    const { status, data } = await this.matchService.getAllMatches();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}

export default MatchesController;
