const students = [
    {
        name: "Ali Raza",
        age: "22",
        university: "Superior University Lahore Gold Campus",
        cgpa: "3.45" 
    },
    {
        name: "Muneeb Ahmad",
        age: "21",
        university: "Superior University Lahore Gold Campus",
        cgpa: "3.59" 
    },
    {
        name: "Ahmad Shahbaz",
        age: "22",
        university: "Superior University Lahore Gold Campus",
        cgpa: "2.98" 
    },
]

const studentModel = {
    getAll: ()=>{
        return students;
    }
}

export default studentModel;