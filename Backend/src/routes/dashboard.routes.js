const express = require('express');
const router = express.Router();
const {getDashboardData} = require('../controllers/dashboard.controller');
const {tokenauthenticate} = require('../middlewares/auth.middleware');


router.get('/dashboard',tokenauthenticate,getDashboardData);
module.exports = router;