/* Imports */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute')
const adminRoute = require('./Routes/adminRoute')
require('dotenv').config();

/* Connection with mongoDB */
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connected')
}).catch((error) => {
    console.log(error);
})

/* pattern route for user manipulation */
app.use('/user', userRoute)
/* pattern route for admin manipulation */
app.use('/admin', adminRoute)

/* starting server */
app.listen(process.env.PORT, (error) => {
    if(error)  
        console.log(error)
    else
        console.log(`Server running | port: ${process.env.PORT}`)
})

module.exports = app;