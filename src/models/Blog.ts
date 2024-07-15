import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  description: string;
  insertedAt: string;
}

const BlogSchema = new Schema({
  title: String,
  description: String,
  insertedAt: String,
});

export default mongoose.model<IBlog>('Blog', BlogSchema);
