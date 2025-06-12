import express from "express";
import {
  createUser,
  addCourse,
  updateCourse,
  deleteCourse,
  createBatch,
  updateBatch,
  deleteBatch,
} from "../controllers/adminController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";      
import { authorizeRoles } from "../middlewares/authorizeRoles.js";      

const router = express.Router();



//Create a user and assign role
router.post(
  "/users",
  //authMiddleware,
  //authorizeRoles("admin"),
  createUser
);

//Course operations
router.post(
  "/courses",
  //authMiddleware,
  //authorizeRoles("admin"),
  addCourse
);

router.put(
  "/courses/:courseId",
  //authMiddleware,
  //authorizeRoles("admin"),
  updateCourse
);

router.delete(
  "/courses/:courseId",
  //authMiddleware,
  //authorizeRoles("admin"),
  deleteCourse
);

//Batch operations
router.post(
  "/batches",
  authMiddleware,
  authorizeRoles("admin"),
  createBatch
);

router.put(
  "/batches/:batchId",
  authMiddleware,
  authorizeRoles("admin"),
  updateBatch
);

router.delete(
  "/batches/:batchId",
  authMiddleware,
  authorizeRoles("admin"),
  deleteBatch
);

export default router;
