const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../models')

const { SECRET_KEY } = process.env

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(409).json({ message: 'Email or password is wrong' })
        }
        const passCompare = bcrypt.compareSync(password, user.password)
        if (!passCompare) { return res.status(409).json({ message: 'Email or password is wrong' }) }
        const payload = { id: user._id }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })





        res.json({
            data: { token }
            //     user: {
            //         email: result.email,
            //         subscription: 'starter'
            //     }
        })
    } catch (error) {
        console.log(error.message, 'wrong login')
    }

}
module.exports = loginUser