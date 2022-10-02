const Joi = require("joi")

const registerValidation = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().min(2).max(30).required(),
        email: Joi.string().email().min(4).max(30).required(),
        password: Joi.string().min(6).required()
    });

    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
        return res.status(400).json({
            status: validationResult.error.message
        })
    }
    next();
}

module.exports = { registerValidation }