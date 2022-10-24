/* Import */
const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const {loginUserValidate} = require('./validateController')
const jwt = require('jsonwebtoken');
require('../.env')


/* Methods of user */
const login = async (req, res, next) => {
    /* Validation of inputs */
    const { error } = loginUserValidate(req.body);
    if (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }

    /* Searching user */
    const selectedUser = await User.findOne({ email: req.body.email })
    if (!selectedUser) {
        return res.json({
            succsess: false,
            message: 'Incorrect email or password'
        })
    }

    /* Validation password */
    const verifiedUser = bcrypt.compareSync(req.body.password, selectedUser.password)
    if (!verifiedUser) {
        return res.json({
            succsess: false,
            message: 'Incorrect email or password'
        })
    }

    /* Generating token */
    const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET)

    res.json({
        success: true,
        token: token
    })

}

const verifyToken = (req, res, next) => {
    if(!req.headers['authorization']){
        res.json({
            success: false,
            message: 'token not found'
        })
    }

    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
        if(!err){
            res.json({
                success:true,
                data: decode
            })
        }else{
            res.json({
                success: false,
                message: err.message
            })
        }
    })
}

module.exports = {login, verifyToken}