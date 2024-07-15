import express from 'express';
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';
import { requireAuth } from '../utils/jwtUtils';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', requireAuth, createBlog);
router.put('/:id', requireAuth, updateBlog);
router.delete('/:id', requireAuth, deleteBlog);

export default router;
