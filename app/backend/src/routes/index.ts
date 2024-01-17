// src/routes/index.ts

import { Router } from 'express';
// import { match } from 'assert';
import teamRouter from './teams.routes';
import userRouter from './users.routes';
import matchesRouter from './matches.routes';
import leaderboardRouter from './leaderboard.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/teams/:id', teamRouter);
router.use('/login', userRouter);
// router.get('/login', (req, res) => res.status(200).send('oi'));
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
