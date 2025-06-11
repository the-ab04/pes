import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  name: string;
  code: string;
}

const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

export default mongoose.model<ICourse>('Course', CourseSchema);
