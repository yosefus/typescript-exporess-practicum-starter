import express, { Request, Response, NextFunction } from 'express';
import { createUserService, updateUserService, getUserService, deleteUserService, getAllUsersService } from '../BL/services/user.service';
import { User } from '../DL/models/user.model';

const router = express.Router();

// Create a new user
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = req.body;
    const createdUser = await createUserService(user);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

// Update an existing user
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: Partial<User> = req.query;
    const user: Partial<User> = req.body;
    const updatedUser = await updateUserService(filter, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// Get a single user
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: Partial<User> = req.query;
    const user = await getUserService(filter);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Delete a user
router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: Partial<User> = req.query;
    const deletedUser = await deleteUserService(filter);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

// Get all users
router.get('/all-users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
