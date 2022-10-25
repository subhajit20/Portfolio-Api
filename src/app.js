/**
 * Importing all packages related to this project
 */
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ContactRoutes from '../routes/Contact.route'
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
/**
 * Declaring Route files
 */


// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
/**
 * Initializing the main app variableof the server
 */
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4001

/**
 * Initializing database
 */
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database has been connected successfully...");
}).catch(() => {
    console.log("Database can't be connected...")
})

/**
 * Declaring cors for cross origin resource sharing 
 */
app.use(cors({
    origin:"*",
    credentials:true
}))

/**
 * Declaring bodyparser for taking data from front end as  request
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    res.setHeader("Access-Contol-Allow-Origin", "*");
    res.setHeader("Access-Contol-Allow-Headers", "*");
    next()
})



const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Portfolio Api",
            version: "1.0.0",
            description: "A simple Portfolio Api API",
            termsOfService: "http://example.com/terms/",
            contact: {
                name: "API Support",
                url: "http://www.exmaple.com/support",
                email: "support@example.com",
        },
    },
    
    servers: [
        {
          url: "http://localhost:4000",
          description: "My API Documentation",
        },
      ],
    },
    apis: ["./src/app.js"],
};

/**
 * Initializing all routes of this project
 */
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

/**
 * @openapi
 * /s1/send:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/r1',(req,res)=>{
    res.json({
        msg:'Hello this is your portfolio backend api...'
    })
})


app.use('/s1',ContactRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})