import express from 'express';
import { RequestHandler } from 'express';
import { authMiddleware } from "../../middlewares/authMiddleware.js";      
import { authorizeRoles } from "../../middlewares/authorizeRoles.js";
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
router.put('/:id', updateTeacher as RequestHandler);
router.delete('/:id', deleteTeacher as RequestHandler);

export default router;
