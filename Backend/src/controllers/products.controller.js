const { uploadFile } = require('../storage/service.storage')
const Product = require('../models/product.model')

async function getProducts(req, res) {
    try {
        const products = await Product.find()
        res.status(200).json({ products })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}
async function createProduct(req,res){
    try {
        const {title,description,price,category} = req.body
        const image = req.file  
        const result = await uploadFile(image.buffer.toString('base64'),image.originalname)
        const product = await Product.create({title,description,price,image:result,category, seller:req.user.id})
        res.status(201).json({product})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}
module.exports = {getProducts,createProduct}