import express, { NextFunction, Request, Response } from 'express';
import { FilterQuery } from 'mongoose';
import {
  addDeckToChallengeService,
  createChallengeService,
  deleteChallengeService,
  getAllChallengesService,
  getChallengeService,
  updateChallengeService,
} from '../BL/services/challenge.service';
import { IChallenge } from '../DL/models/challenge.model';

const router = express.Router();

// Create a new challenge
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const challenge: IChallenge = req.body;
    const createdChallenge = await createChallengeService(challenge);
    res.status(201).json(createdChallenge);
  } catch (error) {
    next(error);
  }
});

// Update an existing challenge
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: FilterQuery<IChallenge> = req.query;
    const challenge: Partial<IChallenge> = req.body;
    const updatedChallenge = await updateChallengeService(filter, challenge);
    res.status(200).json(updatedChallenge);
  } catch (error) {
    next(error);
  }
});

// Get a single challenge
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: FilterQuery<IChallenge> = req.query;
    const challenge = await getChallengeService(filter);
    res.status(200).json(challenge);
  } catch (error) {
    next(error);
  }
});

// Get a single challenge
router.get('/by-day', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: FilterQuery<IChallenge> = req.query;
    const challenge = await getChallengeService(filter);
    res.status(200).json(challenge);
  } catch (error) {
    next(error);
  }
});

// Delete a challenge
router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: FilterQuery<IChallenge> = req.query;
    const deletedChallenge = await deleteChallengeService(filter);
    res.status(200).json(deletedChallenge);
  } catch (error) {
    next(error);
  }
});

// Get all challenges
router.get('/all-challenges', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const challenges = await getAllChallengesService();
    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
});

// Add cards to challenge
router.post('/add-cards/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const challengeId = req.params.id;
    const cards = req.body.cards;
    console.log(cards);
    const updatedChallenge = await addDeckToChallengeService(challengeId, cards);
    res.status(200).json(updatedChallenge);
  } catch (error) {
    next(error);
  }
});

export default router;
