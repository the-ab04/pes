import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";
export type Role = 'admin' | 'teacher' | 'ta' | 'student';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  enrolledCourses: string[];
  reputationScore: number;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'teacher', 'ta', 'student'], required: true },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  reputationScore: { type: Number, default: 0 },
});

userSchema.methods.comparePassword = async function (plain: string): Promise<boolean> {
  return bcrypt.compare(plain, this.password);
};
export const User = model<IUser>('User', userSchema);
