const { Schema, model } = require("mongoose")

const contactsShema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: String,
    },
}, {
    versionKey: false
    // , timestamps: true
}
)

const Contact = model("contact", contactsShema)

module.exports = { Contact }