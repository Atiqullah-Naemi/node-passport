const Joi = require('@hapi/joi');

const RegisterValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),

        email: Joi.string().min(10).email(),

        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{6,30}$/)

    })

    return schema.validate(data)
}

const LoginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(10).email(),

        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{6,30}$/)
    })

    return schema.validate(data)
}


module.exports = { RegisterValidation, LoginValidation }