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

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.matchService.finishMatch(id);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const { status, data } = await this
      .matchService.updateMatch(id, { homeTeamGoals, awayTeamGoals });

    return res.status(mapStatusHTTP(status)).json(data);
  }
}

export default MatchesController;
