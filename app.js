import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dataBase.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();  // Loading environment variables from .env file

const app = express(); // Creating an instance of the express application
connectDB();

app.use(express.json());   // Middleware to parse incoming JSON data
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.use(errorHandler); // Registering custom error handler middleware

export default app;
