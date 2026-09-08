/* ----- IMPORTS  ----- */

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Routes Imports:
import projectRouter from './routes/projectRoutes.js'
import blogRouter from './routes/blogRoutes.js';
import contactFormRouter from './routes/contactFormRoutes.js';

// MAIN APP ERROR HANDLER:
import { errorHandler } from './middleware/errorHandling.js'


/* ----- SERVER CODE ----- */

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// BACKEND ROUTES:
app.use('/api/projects', projectRouter); // for any request that comes from /api/projects, send control over to projectRouter
app.use('/api/blogs', blogRouter);
app.use('/api/contact', contactFormRouter);

const PORT = process.env.PORT || 5000;

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(errorHandler)
// global error handler goes below all other routes - deliberately vague

// app.listen is what happens when the app starts accepting requests - so needs to pass error handler
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
