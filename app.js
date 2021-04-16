const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'})

const app = express();

app.get('/api/v1/bootcamp',(req,res)=>{
    res.status(200).json({ success: true, msg: 'All bootcamps'});
})
app.post('/api/v1/bootcamp',(req,res)=>{
    res.status(201).json({ success: true, msg: 'create bootcamps'});
})
app.put('/api/v1/bootcamp/:id',(req,res)=>{
    res.status(201).json({ success: true, msg: 'put bootcamps by id'});
})
app.delete('/api/v1/bootcamp/:id',(req,res)=>{
    res.status(204).json({ success: true, msg: 'delete bootcamps by id'});
})

const PORT = process.env.PORT||3000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`));