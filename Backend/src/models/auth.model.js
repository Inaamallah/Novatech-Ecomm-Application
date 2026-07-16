const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['seller', 'buyer'],
        default: 'buyer'
    }
})

const AuthModel = mongoose.model('Auth', authSchema)

module.exports = AuthModel