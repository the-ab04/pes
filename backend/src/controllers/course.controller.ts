import { Request, Response } from 'express';
import Course from '../models/course.model';

export const getAllCourses = async (_req: Request, res: Response) => {
  const courses = await Course.find();
  res.json(courses);
};
//For getting course by id
export const getCourseById = async (req: Request, res: Response) => {
  const course = await Course.findById(req.params.id);
  course ? res.json(course) : res.status(404).json({ message: 'Course not found' });
};

export const createCourse = async (req: Request, res: Response) => {
  const { name, code } = req.body;
  const newCourse = await Course.create({ name, code });
  res.status(201).json(newCourse);
};

export const updateCourse = async (req: Request, res: Response) => {
  const { name, code } = req.body;
  const updated = await Course.findByIdAndUpdate(req.params.id, { name, code }, { new: true });
  updated ? res.json(updated) : res.status(404).json({ message: 'Course not found' });
};

export const deleteCourse = async (req: Request, res: Response) => {
  const deleted = await Course.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: 'Course deleted' }) : res.status(404).json({ message: 'Course not found' });
};
