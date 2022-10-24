/* Imports */
const mongoose = require('mongoose');

/* Model request */
const requestSchema = new mongoose.Schema({
    user: {type:String, default:''},
    problem: {type:String, minLength:2, maxlength: 50, required:true},
    description: {type:String, minLength:2, maxlength: 200, required:true},
    sector: {type:String, minLength:2, maxlength: 20},
    date: {type:Date, default: Date.now()},
    priority: {type:String, default:'baixa'},
    status: {type:String, default:'aberto'},
    answer: {type:String, maxlength:200, default:''}
});

/* Exporting model */
module.exports = mongoose.model('Request', requestSchema)