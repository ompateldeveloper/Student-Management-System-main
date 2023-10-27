const express = require("express")
const studentRouter = express.Router();

const {getAllStudent,getStudent,addStudent,deletStudent,updateStudent} = require('../controller/studentController.js');


studentRouter.get('/all',getAllStudent)
studentRouter.get('/get/:roll',getStudent)
studentRouter.post('/add/',addStudent)
studentRouter.put('/update/:stId',updateStudent)
studentRouter.delete('/delete/:stId',deletStudent)


module.exports = studentRouter;