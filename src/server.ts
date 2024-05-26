import cors from 'cors';
import 'dotenv/config';
import express, { Application } from 'express';
import { connectToMongo } from './DL/connectToMongo';
import { errorHandlerMiddleware, notFoundMiddleware } from './middleware';
import mainRouter from './router';
import cParser from 'cookie-parser';

const app: Application = express();

connectToMongo();

app.use(express.json());
app.use(cParser());
app.use(cors());

app.use('/api/v1/', mainRouter);

app.use('*', notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
