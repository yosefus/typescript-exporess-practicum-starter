import { IUser } from '../DL/models/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
