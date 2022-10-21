const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type:String, minLength:2, maxLength:50, required:true},
    email: {type:String, maxLength:100, required:true},
    password: {type:String, minLength:6, maxLength:100, required:true},
    sector: {type:String, maxLength:20, required:true},
    admin: {type:Boolean, default:false},
    createdAt: {type:Date, default: Date.now()}
})

module.exports = mongoose.model('User', userSchema);