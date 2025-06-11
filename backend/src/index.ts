import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import courseRoutes from './routes/course.routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/courses', courseRoutes); // mount route

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
