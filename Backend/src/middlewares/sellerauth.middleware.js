async function sellerAuthentication(req, res, next) {
    try {
        
        const role = req.user.role
        if (role !== 'seller') {
            return res.status(403).json({
                message: 'Forbidden! Seller Account must be needed'
            })
        }
        next()
    }
    catch (error) {
        
        res.status(500).json({
            message: 'Error authenticating the token in Seller Authentication Middleware',
            error: error.message
        })
    }
}
module.exports = { sellerAuthentication }