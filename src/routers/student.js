import { Router } from "express";
import studentController from "../controller/student.js";

const studentRouter = Router();

studentRouter.get("/students",studentController.getAll);

export default studentRouter;