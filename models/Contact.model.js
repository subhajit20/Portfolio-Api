import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

/**
 * Making the model of contact 
 * @id -> contact id
 * @email -> contact email
 * @comment -> contact comment
 * @contact_date -> contact date and time
 */
const contact = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv4()
    },
    name:{
        type:String
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    contact_date:{
        type:String,
        default:`Contact Date :: ${date} and Time :: ${time}`
    }
})

const ContactModel = new mongoose.model("Contact",contact)

export default ContactModel