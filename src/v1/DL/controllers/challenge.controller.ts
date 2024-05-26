import { FilterQuery, UpdateQuery } from 'mongoose';
import ChallengeModel, { IChallenge } from '../models/challenge.model';

class ChallengeController {
  async createChallengeController(challenge: Partial<IChallenge>): Promise<IChallenge> {
    return await ChallengeModel.create(challenge);
  }

  async updateChallengeController(filter: FilterQuery<IChallenge>, challenge: UpdateQuery<IChallenge>, populate: boolean = false): Promise<IChallenge | null> {
    const query = ChallengeModel.findOneAndUpdate(filter, challenge, { new: true });
    if (populate) query.populate('creator');
    return await query.exec();
  }

  async getChallengeController(filter: FilterQuery<IChallenge>, select: string = '', populate: boolean = false): Promise<IChallenge | null> {
    const query = ChallengeModel.findOne(filter).select(select);
    if (populate) query.populate('creator');
    return await query.exec();
  }

  async getAllChallengesController(filter: FilterQuery<IChallenge>, populate: boolean = false): Promise<IChallenge[]> {
    const query = ChallengeModel.find(filter);
    if (populate) query.populate('creator');
    return await query.exec();
  }

  async deleteChallengeController(filter: FilterQuery<IChallenge>, populate: boolean = false): Promise<IChallenge | null> {
    const query = ChallengeModel.findOneAndUpdate(filter, { isActive: false }, { new: true });
    if (populate) query.populate('creator');
    return await query.exec();
  }
}

const challengeController = new ChallengeController();
export default challengeController;
