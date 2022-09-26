const { User } = require('../../models')

const bcrypt = require('bcrypt')



const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) { return res.status(409).json({ message: 'Email or password is wrong' }) }
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        const result = await User.create({ name, email, password: hashPassword })
        res.status(201).json({
            user: {
                email: result.email,
                subscription: 'starter'
            }
        })
    } catch (error) {
        console.log(error.message, 'wrong regiser')
    }
}

module.exports = registerUser