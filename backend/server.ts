/* ----- IMPORTS  ----- */

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

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

/* ----- SERVE THE BUILT FRONTEND FROM THIS SAME SERVER -----
   One Render service hosts both, so the React app and the API share an origin.
   That is what lets the frontend call "/api/blogs" instead of a separate host,
   and why no CORS configuration is needed in production. */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDist = path.resolve(__dirname, '../frontend/dist');

// Only mounted when a build exists. In development you use the Vite dev server
// instead (it proxies /api here), and frontend/dist may be missing or stale.
if (existsSync(frontendDist)) {
  // Serves index.html, /assets/* and anything from frontend/public.
  app.use(express.static(frontendDist));

  // SPA fallback. A hard refresh on /blog asks the server for /blog, which is not
  // a real file - React Router owns that path, so hand back index.html and let the
  // app route it. Written as plain middleware because Express 5 changed the
  // wildcard route syntax and app.get('*') now throws.
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

app.use(errorHandler)
// global error handler goes below all other routes - deliberately vague

// app.listen is what happens when the app starts accepting requests - so needs to pass error handler
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
