import express from 'express';
import { RequestHandler } from 'express';
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from '../../controllers/admin/teacher.controller.ts';

const router = express.Router();

router.post('/', createTeacher);
router.get('/', getAllTeachers);
router.get('/:id', getTeacherById as RequestHandler);
router.delete('/:id', updateTeacher as RequestHandler);
router.delete('/:id', deleteTeacher as RequestHandler);

export default router;
