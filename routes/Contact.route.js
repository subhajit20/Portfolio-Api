import express from "express";
import { SendMessage } from "../controller/Contact.controller";
import signupValidation,{formFields} from "../validation/contact.validation";

const ContactRoutes = express.Router();

/**
 * This is signup route
 */
ContactRoutes.post('/send',formFields,signupValidation,SendMessage);


export default ContactRoutes