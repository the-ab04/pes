import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";

import studentRoutes from "./routes/student/student.routes.ts";
import taRoutes from "./routes/ta/ta.routes.ts";
import authRoutes from "./routes/authorization/auth.routes.ts";
import adminroutes from './routes/admin/admin.routes.ts';
import studentadminRoutes from './routes/admin/student_admin.routes.ts'; // New addition
import teacherRoutes from './routes/admin/teacher.routes.ts';

// Models
import "./models/Course.ts";
import "./models/Batch.ts";
import "./models/Exam.ts";
import "./models/User.ts";
import "./models/Flag.ts";

// Jobs
import "./jobs/evaluationReminder.job.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/admin", adminroutes);
app.use("/api/student", studentRoutes);
app.use("/api/studentadmin", studentadminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ta", taRoutes);
app.use('/api/teachers', teacherRoutes);

// Default route
app.get("/", (_req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
