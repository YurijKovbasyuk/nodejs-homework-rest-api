const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../models')

const { SECRET_KEY } = process.env

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: 'Email or password is wrong' })
        }
        const passCompare = bcrypt.compareSync(password, user.password)
        if (!passCompare) { return res.status(401).json({ message: 'Email or password is wrong' }) }
        if (!user.verify) {
            return res.status(403).json({ message: 'Email not verify' })
        }
        const payload = { id: user._id }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
        await User.findByIdAndUpdate(user._id, { token })
        res.json({
            token: token,
            user: {
                email: email,
                subscription: 'starter'
            }
        })
    } catch (error) {
        console.log(error.message, 'wrong login')
    }

}
module.exports = loginUser