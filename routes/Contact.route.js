import express from "express";
import { SendMessage } from "../controller/Contact.controller";

const ContactRoutes = express.Router();

ContactRoutes.post('/send',SendMessage);


export default ContactRoutes