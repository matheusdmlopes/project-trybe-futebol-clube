import { Request, Router, Response } from 'express';
import LBoardController from '../controllers/LBoardController';

const leaderboardController = new LBoardController();

const router = Router();

router.get('/home', (req: Request, res: Response) =>
  leaderboardController.leaderboardHome(req, res));

export default router;
