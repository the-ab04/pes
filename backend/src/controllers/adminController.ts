import { Request, Response } from "express";
import { User } from "../models/User.js";
import { Course } from "../models/Course.js";
import { Batch } from "../models/Batch.js";
import jwt from "jsonwebtoken";


export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err });
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email,password,role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(409).json({ message: "Email already in use" });
      return;
    }

    const user = await User.create({ name, email,password, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to create user", error: err });
  }
};

// Add a new course
export const addCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, code } = req.body;

    const existing = await Course.findOne({ code });
    if (existing) {
      res.status(409).json({ message: "Course code already exists" });
      return;
    }

    const course = await Course.create({ name, code });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to add course", error: err });
  }
};

// Update an existing course
export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId } = req.params;
    const updated = await Course.findByIdAndUpdate(courseId, req.body, { new: true });

    if (!updated) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update course", error: err });
  }
};

// Delete a course
export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId } = req.params;
    const deleted = await Course.findByIdAndDelete(courseId);

    if (!deleted) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Failed to delete course", error: err });
  }
};

// Create a batch for a course
export const createBatch = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, courseId, students } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    const batch = await Batch.create({ name, course: courseId, students });
    res.status(201).json(batch);
  } catch (err) {
    res.status(500).json({ message: "Failed to create batch", error: err });
  }
};

// Update a batch
export const updateBatch = async (req: Request, res: Response): Promise<void> => {
  try {
    const { batchId } = req.params;
    const updated = await Batch.findByIdAndUpdate(batchId, req.body, { new: true });

    if (!updated) {
      res.status(404).json({ message: "Batch not found" });
      return;
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update batch", error: err });
  }
};

// Delete a batch
export const deleteBatch = async (req: Request, res: Response): Promise<void> => {
  try {
    const { batchId } = req.params;
    const deleted = await Batch.findByIdAndDelete(batchId);

    if (!deleted) {
      res.status(404).json({ message: "Batch not found" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Failed to delete batch", error: err });
  }
};
