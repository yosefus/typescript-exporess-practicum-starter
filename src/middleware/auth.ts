import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../BL/utils/jwt"
import { IUser } from "../DL/models/user.model"
import { getUserController } from "../DL/controllers/user.controller"



export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
   const token = req.cookies.token
   try {
      if (!token) throw ({ statusCode: 401, msg: 'Unauthorized' })
      const decoded = verifyToken(token) as { _id: string }
      const user = await getUserController({ _id: decoded._id })
      if (!user) throw ({ statusCode: 401, msg: 'Unauthorized' })
      req.user = user
      next()
   } catch (error) {
      next(error)
   }
}