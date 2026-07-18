const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createProduct, getProducts } = require('../controllers/products.controller')
const { tokenauthenticate } = require('../middlewares/auth.middleware')
const { sellerAuthentication } = require('../middlewares/sellerauth.middleware')


const upload = multer({ storage: multer.memoryStorage() })


// Routes
router.post('/create', tokenauthenticate, sellerAuthentication, upload.single('image'), createProduct)
router.get('/get', getProducts)


module.exports = router