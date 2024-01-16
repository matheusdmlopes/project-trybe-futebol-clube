// src/routes/index.ts

import { Router } from 'express';
// import { match } from 'assert';
import teamRouter from './teams.routes';
import userRouter from './users.routes';
import matchesRouter from './matches.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/teams/:id', teamRouter);
router.use('/login', userRouter);
router.use('/matches', matchesRouter);

export default router;
