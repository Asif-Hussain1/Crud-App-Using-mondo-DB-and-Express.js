const express =require("express");
const {getUser,getUsers,deleteUser,updateUser,createUser} =require('../controller/studentController.js');
const router = express.Router();



router.get('/',getUsers);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.post('/',createUser);
router.delete('/:id',deleteUser);




module.exports= router;