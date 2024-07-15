import express, { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { generateToken } from '../utils/jwtUtils';

const router = express.Router();

// Sign up
router.post('/signup', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password }) as IUser;
    await newUser.save();
    console.log(newUser)
    const token = generateToken(newUser._id);
    res.status(201).json({ token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
   const token = generateToken(user._id);
   res.json({ token });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
