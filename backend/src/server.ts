import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.ts';

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('PES Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
