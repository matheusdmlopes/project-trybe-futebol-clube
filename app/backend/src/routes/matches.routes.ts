import { Request, Router, Response } from 'express';
import Validations from '../middlewares/Validations';
import MatchesController from '../controllers/MatchController';

const matchController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchController.getAllMatches(req, res));

router.patch(
  '/:id/finish',
  Validations.validateToken,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);

export default router;
