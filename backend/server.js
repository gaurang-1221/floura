import app from './app.js';
import dotenv from 'dotenv';
// import connectDB from './config/db.js';

dotenv.config();

// Connect to database (Will be uncommented when DB config is ready in M2)
// connectDB();

// Render sets the PORT dynamically in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
