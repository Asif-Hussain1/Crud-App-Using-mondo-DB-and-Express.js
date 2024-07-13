const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,'Please enter email']
        },
        password:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
);

const adminModel = mongoose.model('Admin',adminSchema);
module.exports = adminModel;