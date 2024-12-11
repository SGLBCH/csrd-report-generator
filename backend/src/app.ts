import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables based on NODE_ENV
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});
