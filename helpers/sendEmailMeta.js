const nodemailer = require('nodemailer')
require('dotenv').config()

const { META_PASSWOSD } = process.env

const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: 'kovbasyuk.yurij@gmail.com',
        pass: META_PASSWOSD,
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

// const msg = {
//     to: 'kovbasyuk.yurij@gmail.com',
//     from: 'kovbasyuk.yurij@gmail.com',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }

// transporter.sendMail(msg)
//     .then(() => console.log('Email send'))
//     .catch(err => console.log(err.message))

const sendEmail = async (data) => {
    try {
        const msg = { ...data, from: 'kovbasyuk.yurij@gmail.com' }
        await transporter.sendMail(msg)
    } catch (error) {
        console.error(error)
    }
}

module.exports = sendEmail