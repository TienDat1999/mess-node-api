import Joi from 'joi'

const registerValidator = (data) => {
    const rule = Joi.object({
        email: Joi.string().min(6).max(225).required().email(),
        firstName: Joi.string().min(2).max(10).required(),
        lastName: Joi.string().min(2).max(10).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
        password_confirmation:  Joi.any().valid(Joi.ref('password')).required()
    })

    return rule.validate(data);
}

export default registerValidator