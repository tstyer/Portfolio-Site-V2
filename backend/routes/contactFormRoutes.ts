import { Router } from "express";
import { contactFormData } from "../controllers/contactFormController.js";

const router = Router();

// when a user successfully send a message, they are taken to /message-success page,
// and then that data is stored
// post request becaus writing to the database
router.post('/', contactFormData);

export default router;
