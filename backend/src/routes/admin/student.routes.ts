import { Router } from 'express';
import catchAsync from '../utils/catchAsync';

import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/student.controller';


const router = Router();

router.get('/', catchAsync(getAllStudents));
router.get('/:id', catchAsync(getStudentById));
router.post('/', catchAsync(createStudent));
router.put('/:id', catchAsync(updateStudent));
router.delete('/:id', catchAsync(deleteStudent));

export default router;
