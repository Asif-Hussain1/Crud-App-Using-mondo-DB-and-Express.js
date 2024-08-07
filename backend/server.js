
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/studentRouter.js');
const adminRouter = require('./routes/adminRouter.js');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/student',router);
app.use('/admin',adminRouter);

//production
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('Database connected');
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
})