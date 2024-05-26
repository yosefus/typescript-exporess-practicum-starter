import { IUser } from '../v1/DL/models/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
