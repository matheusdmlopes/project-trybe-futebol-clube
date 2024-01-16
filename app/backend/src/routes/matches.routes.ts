import { Request, Router, Response } from 'express';
import MatchesController from '../controllers/MatchController';

const matchController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchController.getAllMatches(req, res));

export default router;
