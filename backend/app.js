import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
// We configure standard CORS to allow requests from the Vercel frontend.
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Health Check Route for Render Deployment Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'Floura API is fully operational' });
});

// To be populated in M2:
// import authRoutes from './routes/authRoutes.js';
// app.use('/api/auth', authRoutes);

// Milestone 3: Sitemap Generation
import sitemapRoutes from './routes/sitemapRoutes.js';
app.use('/api', sitemapRoutes);

export default app;
