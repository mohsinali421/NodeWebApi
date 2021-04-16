const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'})

const app = express();
const routes = require('./routes/bootcamp');

app.use('/api/v1/bootcamp',routes);


const PORT = process.env.PORT||3000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`));