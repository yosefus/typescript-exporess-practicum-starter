import { FilterQuery, UpdateQuery } from "mongoose";
import UserModel, { User } from "../models/user.model";

export const createUserController = (user: User) =>
   UserModel.create(user)

export const updateUserController = (filter: FilterQuery<User>, user: UpdateQuery<User>) =>
   UserModel.findOneAndUpdate(filter, user, { new: true })

export const getUserController = (filter: FilterQuery<User>) =>
   UserModel.findOne(filter)

export const getAllUsersController = (filter: FilterQuery<User>) =>
   UserModel.find(filter)

export const deleteUserController = (filter: FilterQuery<User>) =>
   UserModel.findOneAndUpdate(filter, { isActive: false }, { new: true })