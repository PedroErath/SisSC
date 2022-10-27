/* Imports */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
const authRoute = require('./Routes/authRoute');
const requestRoute = require('./Routes/requestRoute');
const cors = require('cors')
require('dotenv').config();

/* Connection with mongoDB */
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connected')
}).catch((error) => {
    console.log(error);
})

/* Enable cors for client requests */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    app.use(cors());
    next();
});

/* pattern route for user manipulation */
app.use('/user', userRoute);
/* pattern route for autentication */
app.use('/auth', authRoute);
/* pattern route for request manipulation */
app.use('/request', requestRoute);

/* starting server */
app.listen(process.env.PORT, (error) => {
    if(error)  
        console.log(error);
    else
        console.log(`Server running | port: ${process.env.PORT}`);
});

module.exports = app;