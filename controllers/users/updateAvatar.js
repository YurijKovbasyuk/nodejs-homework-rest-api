const { User } = require('../../models')
const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars')


const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file

    try {
        const resultUpload = path.join(avatarDir, originalname)
        const [fileName, extension] = originalname.split('.')
        console.log(fileName)
        console.log(extension)
        await Jimp.read(tempUpload)
            .then(fileName => {
                return fileName
                    .resize(250, 250)
                    .write(tempUpload)
            })
            .catch(err => {
                console.error(err);
            })
        await fs.rename(tempUpload, resultUpload)
        const avatarURL = path.join('public', 'avatars', originalname)
        await User.findByIdAndUpdate(req.user._id, { avatarURL })
        return res.json({ avatarURL })

    } catch (error) {
        console.log(tempUpload)
        await fs.unlink(tempUpload)
        return res.json(error)
    }
}

module.exports = updateAvatar