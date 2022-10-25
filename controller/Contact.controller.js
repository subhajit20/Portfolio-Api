/**
 * Declaring contact model
 */
import ContactModel from '../models/Contact.model'

export function SendMessage(req,res){
    try{
        const contacts = new ContactModel(req.body);
        const saveContact = contacts.save()
        res.status(200).json({
            msg:'Your message is successfullt been sent...'
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            error:"Something went wrong..."
        })
    }
}