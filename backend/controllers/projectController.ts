import type { Request, Response } from 'express';
import Project from '../models/Project.js';

// written as named (not default) because there will likely be more functions here later.
export async function getAllProjects(req: Request, res: Response) {
    try {
        const allData = await Project.find();
        console.log("Project Data Collected Successfully", allData);
        res.json(allData);
    } catch (err) {     
        console.log("Error fetching project model data");
        res.status(500).json({message: "Unable to collect project model data"});
    }
}