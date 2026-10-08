import { Router } from "express";
import { contactFormData } from "../controllers/contactFormController.js";
import { contactValidation } from "../middleware/contactFormValidation.js";

const router = Router();

// when a user successfully send a message, they are taken to /message-success page,
// and then that data is stored
// post request becaus writing to the database
router.post('/', contactValidation, contactFormData);

export default router;
