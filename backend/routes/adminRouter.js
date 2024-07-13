
const express = require('express');
const {getAdmin,createAdmin} = require('../controller/adminController.js');

const adminRouter = express.Router();

adminRouter.get('/:email/:password',getAdmin);
adminRouter.post('/',createAdmin);


module.exports = adminRouter;