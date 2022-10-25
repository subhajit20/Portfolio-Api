import { check,validationResult } from "express-validator";
import ContactModel from "../models/Contact.model";

export const formFields = [
    check("name")
        .isLength({ min: 3 })
        .withMessage("Length of your name is too short!")
        .isLength({ max: 50 })
        .withMessage("Length of your name is too long!"),
    check("email")
        .isEmail()
        .withMessage("Your email is not valid"),
    check('comment')
        .isLength({ min: 5 })
        .withMessage("Length of your Comment is too short!")
        .isLength({ max: 400 })
        .withMessage("Length of your Comment is too long!"),
]

const signupValidation = (req, res, next) => {
    const error = validationResult(req);
    const mapperError = error.mapped();
    if (Object.keys(mapperError).length === 0) {
        next()
    } else {
        res.status(500).json({
            err: mapperError
        })
    }
}

export default signupValidation