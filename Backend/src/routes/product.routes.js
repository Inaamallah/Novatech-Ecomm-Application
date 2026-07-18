const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createProduct,getSellerProducts, deleteProduct, getAllProducts, getProductById } = require('../controllers/products.controller')
const { tokenauthenticate } = require('../middlewares/auth.middleware')
const { sellerAuthentication } = require('../middlewares/sellerauth.middleware')


const upload = multer({ storage: multer.memoryStorage() })


// Routes
router.post('/create', tokenauthenticate, sellerAuthentication, upload.single('image'), createProduct)
router.get('/getsellerproducts', tokenauthenticate, sellerAuthentication, getSellerProducts)
router.get('/getallproducts',  getAllProducts)
router.delete('/delete/:id', tokenauthenticate, sellerAuthentication, deleteProduct)
router.get('/getproductbyid/:id', getProductById)


module.exports = router