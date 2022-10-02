const { User } = require('../../models')

const bcrypt = require('bcrypt')
const gravatar = require('gravatar')



const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) { return res.status(409).json({ message: 'Email or password is wrong' }) }
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        const avatarURL = gravatar.url(email)
        const result = await User.create({ name, email, password: hashPassword, avatarURL })
        res.status(201).json({
            user: {
                name: result.name,
                email: result.email,
                subscription: 'starter',
                avatar: result.avatarURL
            }
        })
    } catch (error) {
        console.log(error.message, 'wrong regiser')
    }
}

module.exports = registerUser