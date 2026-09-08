import type { Request, Response, NextFunction } from 'express';

// express distinguishes regular middleware from error handling middleware based on the amount of parameters
// even if you don't use next in the function, you must still keep it so express knows its an error handler based on amount of parameters
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

        console.error(err);
        res.status(500).json({message: "Something went wrong"});

};


// error handler message must be deliberately vague and generic to not leak any important info. 
// This is because the error handler is sent to whoever called the API.

