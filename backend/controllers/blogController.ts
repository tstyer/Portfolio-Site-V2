import Blogs from "../models/Blogs.js";
import type { Request, Response } from 'express';

export async function getAllBlogs(req: Request, res: Response ) {
    try {
        const allData = await Blogs.find();
        console.log("Success fetching all blog data");
        res.status(200).json(allData)
    } catch (err) {
        console.log("Error fetching all blog data");
        res.status(500).json({message: "Could not collect blog data for 'getAllBlogs'"});
    }
}