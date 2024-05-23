import express, { NextFunction, Request, Response } from 'express';
import {
   loginService,
   registerService,
} from '../BL/services/auth.service';
import { userLoginSchema, userRegistrationSchema } from '../BL/utils/zod';
import { validateData } from '../middleware/validation';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.post('/login', validateData(userLoginSchema), async (req: Request, res: Response, next: NextFunction) => {
   try {
      const user: { email: string, password: string } = req.body;
      const { token, user: createdUser } = await loginService(user.email, user.password);
      res.cookie('token', token, { httpOnly: true });
      res.status(201).json(createdUser);
   } catch (error) {
      next(error);
   }
});


router.post('/register', validateData(userRegistrationSchema), async (req: Request, res: Response, next: NextFunction) => {
   try {
      const user: { email: string, password: string, name: string  } = req.body;
      const { token, user: createdUser } = await registerService(user.email, user.password, user.name);
      res.cookie('token', token, { httpOnly: true });
      res.status(201).json(createdUser);
   } catch (error) {
      next(error);
   }
});

router.all('/auth-test', authMiddleware, (req: Request, res: Response) => {
   res.json({user : req?.user});
})

export default router;
