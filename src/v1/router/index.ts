import userRouter from './user.router';
import authRouter from './auth.router';
import challengeRouter from './challenge.router';
import express from 'express';

const router = express.Router();

router.use('/users/', userRouter);
router.use('/auth/', authRouter);
router.use('/challenges/', challengeRouter);

export default router;
