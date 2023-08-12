import { Router } from "express";
import facultyController from "../controller/faculty.js";

const facultyRouter = Router();

facultyRouter.get("/faculty" , facultyController.getAll)

export default facultyRouter;