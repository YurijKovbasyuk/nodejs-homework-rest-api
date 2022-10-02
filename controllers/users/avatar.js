const fs = require('fs/promises')
const path = require('path')

const avatarDir = path.join(__dirname, '../../public', 'avatars')


const avatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file
    const resultUpload = path.join(avatarDir, originalname)
    try {
        await fs.rename(tempUpload, resultUpload)
        return res.json(req.file)

    } catch (error) {
        await fs.unlink(tempUpload)
        return res.json(error.massage)
    }


    return res.json(req.file)
}

module.exports = avatar