import express from "express";
import { getAllStudents } from "../controllers/userController.ts";

const router = express.Router();

router.get("/allstudents", getAllStudents);

export default router;
