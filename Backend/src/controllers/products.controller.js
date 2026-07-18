const { uploadFile } = require('../storage/service.storage')
const Product = require('../models/product.model')

async function getSellerProducts(req, res) {
    try {
        const id = req.user.id
        if(!id){
            return res.status(400).json({message:'Please Login'})
        }
        // Change from findById(id) to find({ seller: id })
        const products = await Product.find({ seller: id })
        
        if(!products || products.length === 0){
            return res.status(404).json({message:'No products found'})
        }
        res.status(200).json({ products })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}
async function getAllProducts(req, res) {
    try {
        const products = await Product.find()
        
        if(!products || products.length === 0){
            return res.status(404).json({message:'No products found'})
        }
        res.status(200).json({ products })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}
async function createProduct(req,res){
    try {
        const {title,description,price,category,rating} = req.body
        const image = req.file  
        const result = await uploadFile(image.buffer.toString('base64'),image.originalname)
        const product = await Product.create({title,description,price,image:result,category,rating, seller:req.user.id})
        res.status(201).json({product})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}
async function deleteProduct(req,res){
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({message:'Product ID is required'})
        }
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        res.status(200).json({message:'Product deleted successfully',product})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}
async function getProductById(req,res){
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({message:'Product ID is required'})
        }
        const product = await Product.findById(id)
        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        res.status(200).json({ product })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}


module.exports = {getSellerProducts,createProduct,deleteProduct, getAllProducts, getProductById}