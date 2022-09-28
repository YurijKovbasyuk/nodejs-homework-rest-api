const Joi = require("joi")


const patchFavoriteValidation = (req, res, next) => {
    const schema = Joi.object({
        favorite: Joi.boolean().required().strict()
    })
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
        return res
            .status(400)
            .json({ status: validationResult.error.message })
    }
    next()
}
module.exports = { patchFavoriteValidation }