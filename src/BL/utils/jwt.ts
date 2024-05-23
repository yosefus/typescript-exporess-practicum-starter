import jwt from 'jsonwebtoken'
import { IUser } from '../../DL/models/user.model'

const secret = process.env.JWT_SECRET as string

export const generateToken = (user: IUser) => {
   return jwt.sign({ _id: user._id }, secret as string, {
      expiresIn: '1d',
   })
}

export const verifyToken = (token: string)  => {
   return jwt.verify(token, secret as string)
}