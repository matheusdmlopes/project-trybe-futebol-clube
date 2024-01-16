import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchService from '../services/MatchService';

class MatchesController {
  constructor(
    private matchService = new MatchService(),
  ) {}

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    const { status, data } = await this.matchService
      .getAllMatches(inProgress as string | undefined);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}

export default MatchesController;
