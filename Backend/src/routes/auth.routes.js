const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/auth.controller')
const { tokenauthenticate } = require('../middlewares/auth.middleware')

router.post('/register', register)
router.post('/login', login)

module.exports = router

