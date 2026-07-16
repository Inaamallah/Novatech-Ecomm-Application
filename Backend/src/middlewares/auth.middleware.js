const jwt = require('jsonwebtoken')
require('dotenv').config()

async function tokenauthenticate(req, res, next) {
    try {
        const token = req.cookies.token
        if(!token) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error authenticating token',
            error: error.message
        })
    }
}

module.exports = { tokenauthenticate }