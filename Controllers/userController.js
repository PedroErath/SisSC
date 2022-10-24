/* Import */
const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const { addUserValidate, editUserValidate } = require('./validateController')
const jwt = require('jsonwebtoken');

/* Methods of user */
const loadUser = async (req, res, next) => {
    let id = req.body.id;
    if(!id) return res.json({
        success: false,
        message: 'User not found',
    })

    /* Searching user */
    try {
        const doc = await User.findById(id);
        if(!doc){
            res.json({
                success: false,
                message: 'User not found',
            })
        }
        res.json({
            success: true,
            data: doc
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'User not found',
            err: error.message
        })
    }
}
const editUser = (req, res, next) => {
    /* Geting inputs */
    let user = {}
    user.name = req.body.name
    user.email = req.body.email
    user.sector = req.body.sector

    /* Validation of inputs */
    const { error } = editUserValidate(user);
    if (error){
        return res.json({
            success: false,
            message: error.message
        })
    }
    
    /* Searching and update user */
    User.findByIdAndUpdate(req.body._id, user, {returnDocument:'after'} ,(err, result) => {
        if(!err){
            res.json({
                success: true,
                message: 'User updated',
                data: result
            })
        }else{
            res.json({
                success: false,
                message: 'User not found',
                data: err.message
            })
        }
    })
}

const addUser = async (req, res, next) => {
    /* Validation of inputs */
    const { error } = addUserValidate(req.body);
    if (error){
        return res.json({
            success: false,
            message: error.message
        })
    }
     /* Searching user */
    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser){
        return res.json({
            success: false,
            message: 'E-mail already registered'
        })
    }

    const docUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        sector: req.body.sector,
        admin: req.body.admin || false
    });

    /* Adding user */
    docUser.save((err, result) => {
        if (!err){
            res.json({
                success: true,
                message: 'User registered',
                data: result
            })
        }else{
            res.json({
                success: false,
                message: 'User not registered',
                data: err.message
            })
        }
    })
}

/* exporting methods */
module.exports = { /* login, */ addUser, loadUser, editUser };