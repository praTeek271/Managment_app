const express=require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// routes
router.get('/',customerController.customer_homepage);


module.exports =router;