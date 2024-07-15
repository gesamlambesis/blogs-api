import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';

interface JWTPayload {
  userId: string;
}

export const generateToken = (userId: string): string => {
  const payload: JWTPayload = { userId };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
};

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (err) {
    return null;
  }
};

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Authorization: Bearer <token>
  if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};