const adminModel = require('../models/adminModel.js');
const path = require('path');
const getAdmin = async(req,res)=>{
    try {
        const {email,password} = req.params;
        const admin = await adminModel.findOne({email:email,password:password});
        if(admin){
           res.json(admin);
        }
       
    } catch (error) {
        res.status(200).json({message:error.message});
    }
}


const createAdmin = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const admin = await adminModel.create({email:email,password:password});
        res.json(admin);
    } catch (error) {
        res.status(200).json({message:error.message});
        
    }
}

module.exports = {getAdmin,createAdmin};