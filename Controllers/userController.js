const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const {addUserValidate, loginUserValidate} = require('./validateController')
/* const jwt = require('jsonwebtoken'); */

/* const login = async (req, res, next) => {
    const { email, password } = req.body
} */

const addUser = async (req, res, next) => {
    const {error} = addUserValidate(req.body);
    if(error)
        return res.json({
            success: false,
            message: error.message
        })

    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser)
        res.json({
            success: false,
            message: 'Email já cadastrado'
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
                message: 'Usuário registrado',
                data: result
            })
        else
            res.json({
                success: false,
                message: 'Usuário não registrado',
                data: err.message
            })
    })
}

module.exports = { /* login, */ addUser };