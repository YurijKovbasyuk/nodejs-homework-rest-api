const { User } = require('../../models')
const jwt = require('jsonwebtoken')

const { SECRET_KEY } = process.env

const authUser = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ")

    // npm pasport

    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        const user = await User.findById(id)
        if (bearer !== "Bearer" || !user || !token) {
            return res.status(401).json({ message: 'Not authorized' })
        }
        req.user = user;
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ message: 'Not authorized' })
    }
}

module.exports = { authUser }