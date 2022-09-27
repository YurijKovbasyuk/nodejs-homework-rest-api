const { Schema, model } = require("mongoose")

const userShema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    }, password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    token: String
}, { versionKey: false })

const User = model("user", userShema)

module.exports = { User }