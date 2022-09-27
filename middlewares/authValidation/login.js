const Joi = require("joi")

const loginValidation = (req, res, next) => {

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
        return res.status(400).json({
            status: validationResult.error.message
        })
    }
    next();
}

module.exports = { loginValidation }