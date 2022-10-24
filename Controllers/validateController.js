const joi = require('@hapi/joi');

const addUserValidate = (data) => {

    const schema = joi.object({
        name: joi.string().required().min(2).max(50),
        email: joi.string().required().max(100),
        sector: joi.string().required().min(2).max(20),
        password: joi.string().required().min(6).max(100)
    })

    return schema.validate(data)
}
const editUserValidate = (data) => {

    const schema = joi.object({
        name: joi.string().required().min(2).max(50),
        email: joi.string().required().max(100),
        sector: joi.string().required().min(2).max(20)
    })

    return schema.validate(data)
}

const loginUserValidate = (data) => {

    const schema = joi.object({
        email: joi.string().required().max(100),
        password: joi.string().required().min(6).max(100)
    })

    return schema.validate(data)
}

module.exports = {addUserValidate, loginUserValidate, editUserValidate}