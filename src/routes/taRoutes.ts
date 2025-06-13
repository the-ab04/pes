import express from "express";
import { distributeEvaluations, flagOutliers, reviewSubmission } from "../controllers/taController";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.post("/evaluate/distribute", authMiddleware, distributeEvaluations);
router.post("/evaluate/flag", authMiddleware, flagOutliers);
router.post("/evaluate/review", authMiddleware, reviewSubmission);

export default router;
