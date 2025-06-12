import { User } from "../models/User.ts";
import { Request, Response } from "express";

// Get all the students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const allStudents = await User.find({ role: "student" });
    res.json(allStudents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to Fetch students" });
  }
};

// Get all the teachers
export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const allTeachers = await User.find({ role: "teacher" });
    res.json(allTeachers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to Fetch teachers" });
  }
};

// Get all the admins
export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const allAdmins = await User.find({ role: "admin" });
    res.json(allAdmins);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to Fetch admins" });
  }
};
