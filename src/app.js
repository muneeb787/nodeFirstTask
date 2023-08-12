import express from "express";
import studentRouter from "./routers/student.js";
import facultyRouter from "./routers/faculty.js";

const app = express();

app.get("/",(req,res)=>{
    return res.json(`Yes You Are on Write PLace
    - /students => to View Student Data
    - /faculty => to View Faculty Data`);
})

app.use(studentRouter)
app.use(facultyRouter)

app.listen(3300,()=>{
    console.log("Listening to port 3300");
})