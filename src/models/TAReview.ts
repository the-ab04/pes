import mongoose, { Schema, Document } from 'mongoose';

export interface ITAReview extends Document {
  evaluationId: mongoose.Types.ObjectId;
  taId: mongoose.Types.ObjectId;
  status: "Resolved" | "Escalated";
  comments?: string;
}

const TAReviewSchema = new Schema<ITAReview>({
  evaluationId: { type: Schema.Types.ObjectId, ref: 'Evaluation', required: true },
  taId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ["Resolved", "Escalated"], required: true },
  comments: String,
});

export default mongoose.model<ITAReview>('TAReview', TAReviewSchema);
