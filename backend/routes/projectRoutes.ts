import { Router } from 'express';
import { getAllProjects } from '../controllers/projectController.js';

const router = Router();

router.get('/', getAllProjects); // when a get request comes from '/', pass it the getAllProjects controller function.

export default router; // default because this will be the only code in this file to export.


