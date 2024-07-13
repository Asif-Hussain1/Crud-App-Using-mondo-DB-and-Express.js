
const studentModel = require('../models/studentModel.js');

const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const student = await studentModel.findById(id);
        res.json(student);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


const getUsers = async(req,res)=>{
    try {
        const users = await studentModel.find();
        res.json(users);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await studentModel.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

const updateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,rollNo} = req.body;
        const user = await studentModel.findByIdAndUpdate(id,{name:name,rollNo:rollNo});
        const updatedUser = await studentModel.findById(id);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

const createUser = async(req,res)=>{
    try {
        const {name,rollNo} = req.body;
        const user = await studentModel.create({name:name,rollNo:rollNo});
        res.json(user);
    } catch(error) {
        res.status(404).json({message:error.message});
    }
}

module.exports= {getUser,getUsers,deleteUser,updateUser,createUser};