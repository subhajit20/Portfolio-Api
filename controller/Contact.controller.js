/**
 * Declaring contact model
 */
import ContactModel from '../models/Contact.model'

export function SendMessage(req,res){
    try{
        console.log(req.body.day)

        res.status(200).json({
            msg:'This is send message api...'
        })
    }catch(e){
        res.status(500).json({
            error:"Something went wrong..."
        })
    }
}