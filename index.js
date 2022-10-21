const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute')
require('dotenv').config();

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connected')
}).catch((error) => {
    console.log(error);
})

app.use('/user', userRoute)

app.listen(process.env.PORT, (error) => {
    if(error)  
        console.log(error)
    else
        console.log(`Server running | port: ${process.env.PORT}`)
})

module.exports = app;