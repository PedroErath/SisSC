const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const { addUserValidate, loginUserValidate } = require('./validateController')
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
    const { error } = loginUserValidate(req.body);
    if (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }

    const selectedUser = await User.findOne({ email: req.body.email })
    if (!selectedUser) {
        return res.json({
            succsess: false,
            message: 'Incorrect email or password'
        })
    }

    const verifiedUser = bcrypt.compareSync(req.body.password, selectedUser.password)
    if (!verifiedUser) {
        return res.json({
            succsess: false,
            message: 'Incorrect email or password'
        })
    }

    const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET)

    res.json({
        success: true,
        token: token
    })



}

const addUser = async (req, res, next) => {
    const { error } = addUserValidate(req.body);
    if (error)
        return res.json({
            success: false,
            message: error.message
        })

    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser)
        res.json({
            success: false,
            message: 'E-mail already registered'
        })

    const docUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        sector: req.body.sector,
        admin: req.body.admin || false
    });

    docUser.save((err, result) => {
        if (!err)
            res.json({
                success: true,
                message: 'User registered',
                data: result
            })
        else
            res.json({
                success: false,
                message: 'User not registered',
                data: err.message
            })
    })
}

module.exports = { login, addUser };