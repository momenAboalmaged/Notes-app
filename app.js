import * as dotenv from 'dotenv' ;
dotenv.config();

import express from 'express';
import * as allRoutes from './modules/index.route.js'
import connection from './DB/connection.js';
const app=express();
const baseURL="/api/v1"


app.use(express.json());
app.use(`${baseURL}/user`,allRoutes.userRouter);
app.use(`${baseURL}/note`,allRoutes.noteRouter);
app.use(`${baseURL}/auth`,allRoutes.authRouter);



app.get("*",(req,res)=>{
    res.json({message:"Invalid Api"})
})

connection()

app.listen(3000,()=>{
    console.log("Server is running");
})





