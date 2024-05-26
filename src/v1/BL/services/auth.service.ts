import * as UserController from '../../DL/controllers/user.controller';
import { comparePassword, hashPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';

export const loginService = async (email: string, password: string) => {
  const user = await UserController.getUserController({ email }, '+password');

  if (!user) throw { code: 500, msg: 'User not found' };

  if (user.password) if (!comparePassword(password, user.password)) throw { code: 500, msg: 'Wrong password' };

  if (!user.isActive) throw { code: 500, msg: 'User not active' };

  const token = generateToken(user);

  return { user, token };
};

export const registerService = async (email: string, password: string, name: string) => {
  const user = await UserController.getUserController({ email });

  if (user) throw { code: 500, msg: 'User already exists' };

  const hashedPassword = hashPassword(password);

  const createdUser = await UserController.createUserController({
    email,
    password: hashedPassword,
    name,
  });

  const token = generateToken(createdUser);

  return { user: createdUser, token };
};
