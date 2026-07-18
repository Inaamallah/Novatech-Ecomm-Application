const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'auths'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const productModel = mongoose.model('Products',productSchema)
module.exports = productModel

