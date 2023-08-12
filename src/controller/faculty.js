import facultyModel from "../models/faculty.js";

const facultyController = {
    getAll: (req,res)=>{
        const faculty = facultyModel.getAll()
        return res.json(faculty);
    }
}

export default facultyController;