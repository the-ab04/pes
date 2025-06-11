import mongoose, { Schema, Document } from 'mongoose';

export interface IEvaluation extends Document {
  submissionId: mongoose.Types.ObjectId;
  peerEvaluations: {
    evaluatorId: mongoose.Types.ObjectId;
    marks: number;
    feedback: string;
  }[];
  flagged: boolean;
  taReviewed: boolean;
}

const EvaluationSchema = new Schema<IEvaluation>({
  submissionId: { type: Schema.Types.ObjectId, ref: 'Submission', required: true },
  peerEvaluations: [
    {
      evaluatorId: { type: Schema.Types.ObjectId, ref: 'User' },
      marks: Number,
      feedback: String,
    }
  ],
  flagged: { type: Boolean, default: false },
  taReviewed: { type: Boolean, default: false },
});

export default mongoose.model<IEvaluation>('Evaluation', EvaluationSchema);
