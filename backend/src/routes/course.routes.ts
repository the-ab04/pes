import { Router } from 'express';
import {
  getAllCourses,
  getCourseById,
  getCourseByCode,
  createCourse,
  updateCourse,
  deleteCourse
} from '../controllers/course.controller';

const router = Router();

router.get('/', getAllCourses);
router.get('/code/:code', getCourseByCode); // must come before /:id
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
