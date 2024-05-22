import userRouter from './user.router'
import express from 'express'

const router = express.Router()

router.use('/users/', userRouter)

export default router