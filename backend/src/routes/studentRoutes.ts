import express from "express";
import { getBatchesByStudentId } from "../controllers/batchController.ts"

const router = express.Router();

router.get('/:id/batches',getBatchesByStudentId);

export default router;