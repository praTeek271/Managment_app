const express=require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// routes
router.get('/customer',customerController.customer_homepage);
router.get('/books',customerController.books_homepage);
router.get('/',customerController.homepage);
router.post('/customer',customerController.addPOSTcustomer);
router.get('/customerviews/:id',customerController.view_customer);



module.exports =router;