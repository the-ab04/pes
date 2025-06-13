
import express from "express";
import connectDB from "./config/db.ts";
import studentRoutes from "./routes/student/student.routes.ts";
import "./models/Course.ts";
import "./models/Batch.ts";
import "./models/Exam.ts";
import "./models/User.ts";
import "./jobs/evaluationReminder.job.ts";
import authRoutes from './routes/authorization/auth.routes.ts';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import adminRoutes from "./routes/adminRoutes.js";
import courseRoutes from './routes/course.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get('/', (_req, res) => {
  res.send('Hello from the backend!');
});

app.use("/api/student", studentRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/admin", adminRoutes);
//course routes
app.use('/api/courses', courseRoutes);

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });