import express from "express";
import studentRouter from "./routers/student.js";

const app = express();

app.get("/",(req,res)=>{
    return res.json(`Yes You Are on Write PLace
    - /students => to View Student Data`);
})

app.use(studentRouter)

app.listen(3300,()=>{
    console.log("Listening to port 3300");
})