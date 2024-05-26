import { FilterQuery } from 'mongoose';
import challengeController from '../../DL/controllers/challenge.controller';
import { IChallenge, ICard } from '../../DL/models/challenge.model';

const { createChallengeController, updateChallengeController, getChallengeController, deleteChallengeController, getAllChallengesController } =
  challengeController;

export const createChallengeService = async (challenge: IChallenge) => {
  const createdChallenge = await createChallengeController(challenge);
  return createdChallenge;
};

export const updateChallengeService = async (filter: FilterQuery<IChallenge>, challenge: Partial<IChallenge>) => {
  const updatedChallenge = await updateChallengeController(filter, challenge);
  return updatedChallenge;
};

export const getChallengeService = async (filter: FilterQuery<IChallenge>) => {
  const challenge = await getChallengeController(filter);
  return challenge;
};

export const deleteChallengeService = async (filter: FilterQuery<IChallenge>) => {
  const deletedChallenge = await deleteChallengeController(filter);
  return deletedChallenge;
};

export const getAllChallengesService = async () => {
  const challenges = await getAllChallengesController({});
  return challenges;
};

export async function addDeckToChallengeService(challengeId: string, cards: ICard[]): Promise<IChallenge | null> {
  const challenge = await getChallengeService({ _id: challengeId });
  if (!challenge) throw { code: 404, msg: 'Challenge not found' };
  challenge.cards.push(...cards);
  const updatedChallenge = await challenge.save();
  return updatedChallenge;
}
