//src/controllers/taControllers
import { Request, Response } from 'express';
import Evaluation from '../models/Evaluation';
import TAReview from '../models/TAReview';

// Distribute evaluations to peers
export const distributeEvaluations = async (req: Request, res: Response): Promise<void> => {
  try {
    const { submissionId, peerEvaluations } = req.body;

    const newEval = new Evaluation({ submissionId, peerEvaluations });
    await newEval.save();
    
    res.status(201).json(newEval);
  } catch (error) {
    res.status(500).json({ message: "Error distributing evaluations", error });
  }
};

// Flag incorrect evaluations
export const flagOutliers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { evaluationId, reason } = req.body;

    const flaggedEval = await Evaluation.findByIdAndUpdate(evaluationId, { flagged: true }, { new: true });
    res.json({ message: "Evaluation flagged for review", flaggedEval });
  } catch (error) {
    res.status(500).json({ message: "Error flagging outliers", error });
  }
};

// TA reviews flagged evaluations
export const reviewSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { evaluationId, taId, status, comments } = req.body;

    const review = new TAReview({ evaluationId, taId, status, comments });
    await review.save();

    if (status === "Escalated") {
      await Evaluation.findByIdAndUpdate(evaluationId, { taReviewed: true }, { new: true });
    }

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Error reviewing submission", error });
  }
};
