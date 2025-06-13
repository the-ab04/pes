import { Request, Response } from 'express';
import Course from '../models/course.model';

// Get all courses
export const getAllCourses = async (_req: Request, res: Response) => {
  const courses = await Course.find();
  console.log("All course codes:", courses.map(c => c.code)); // Debug log
  res.json(courses);
};

// Get course by ID
export const getCourseById = async (req: Request, res: Response) => {
  console.log("Searching for course with ID:", req.params.id);
  const course = await Course.findById(req.params.id);
  console.log("Course found:", course);
  course ? res.json(course) : res.status(404).json({ message: 'Course not found' });
};

// Get course by subject code
export const getCourseByCode = async (req: Request, res: Response) => {
  const rawCode = req.params.code;
  const code = rawCode.trim(); // remove spaces
  console.log("Searching for course with code:", code);

  const course = await Course.findOne({
    code: new RegExp(`^${code}$`, 'i') // case-insensitive match
  });

  console.log("Course found:", course);
  course ? res.json(course) : res.status(404).json({ message: 'Course not found' });
};

// Create a new course
export const createCourse = async (req: Request, res: Response) => {
  const { name, code } = req.body;
  const newCourse = await Course.create({ name, code });
  res.status(201).json(newCourse);
};

// Update an existing course by ID
export const updateCourse = async (req: Request, res: Response) => {
  const { name, code } = req.body;
  const updated = await Course.findByIdAndUpdate(req.params.id, { name, code }, { new: true });
  updated ? res.json(updated) : res.status(404).json({ message: 'Course not found' });
};

// Delete a course by ID
export const deleteCourse = async (req: Request, res: Response) => {
  const deleted = await Course.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: 'Course deleted' }) : res.status(404).json({ message: 'Course not found' });
};
