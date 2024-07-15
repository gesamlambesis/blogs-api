import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/connectDB'; // Import MongoDB connection function
import blogRoutes from './routes/blogRoutes';
import authRoutes from './routes/authRoutes'
import { errorHandler } from './middlewares/errorHandler';
import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
connectDB().then(() => {
  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware
  app.use(bodyParser.json());
  app.use(cors());

  // Routes
  app.use('/api/blogs', blogRoutes);
  app.use('/api/user', authRoutes)

  // Error handler middleware
  app.use(errorHandler);

  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
