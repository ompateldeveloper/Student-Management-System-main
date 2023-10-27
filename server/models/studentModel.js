const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    roll:{
        type:Number,
        required:true,
        
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        reuired:true
    },
    address:String,
    gender:String   
})
// {
//     roll:"123",
//     name:"rohit",
//     email:'rohit@gmail.com',
//     contact:"8149jkskdfkj",
//     address:"hello",
//     gender:"male"
// }

module.exports = mongoose.models.Student || mongoose.model("Student", studentSchema);
