import { Request, Response } from 'express';
import Blog from '../models/Blog';

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ insertedAt: -1 });

    res.json(blogs);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const blog = new Blog({
    title,
    description,
    insertedAt: new Date().toISOString(),
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (updatedBlog) {
      res.json(updatedBlog);
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (deletedBlog) {
      res.json({ message: 'Blog post deleted' });
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
