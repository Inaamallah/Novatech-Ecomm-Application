const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createProduct, getProducts, deleteProduct } = require('../controllers/products.controller')
const { tokenauthenticate } = require('../middlewares/auth.middleware')
const { sellerAuthentication } = require('../middlewares/sellerauth.middleware')


const upload = multer({ storage: multer.memoryStorage() })


// Routes
router.post('/create', tokenauthenticate, sellerAuthentication, upload.single('image'), createProduct)
router.get('/get/', tokenauthenticate, sellerAuthentication, getProducts)
router.delete('/delete/:id', tokenauthenticate, sellerAuthentication, deleteProduct)


module.exports = router