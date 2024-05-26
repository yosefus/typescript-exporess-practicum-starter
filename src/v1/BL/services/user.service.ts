import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserController,
  updateUserController,
} from '../../DL/controllers/user.controller';
import { User } from '../../DL/models/user.model';

export const createUserService = async (user: User) => {
  const userCreated = await createUserController(user);
  return userCreated;
};

export const updateUserService = async (filter: Partial<User>, user: Partial<User>) => {
  const userUpdated = await updateUserController(filter, user);
  return userUpdated;
};

export const getUserService = async (filter: Partial<User>) => {
  const user = await getUserController(filter);
  return user;
};

export const deleteUserService = async (filter: Partial<User>) => {
  const user = await deleteUserController(filter);
  return user;
};

export const getAllUsersService = async () => {
  const users = await getAllUsersController({});
  return users;
};
