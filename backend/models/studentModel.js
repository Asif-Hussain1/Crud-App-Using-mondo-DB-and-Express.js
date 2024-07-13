


const mongoose = require('mongoose');
const studentScema  = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"]
    },
    rollNo:{
        type:String,
        required:true
    }

},{
    timestamps :true
});

const studentModel = mongoose.model('student',studentScema);
module.exports= studentModel;