const express=require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const bookController = require('../controllers/booksController');

// routes for customer
router.get('/customer',customerController.customer_homepage);
// router.get('/books',customerController.books_homepage);
router.get('/',customerController.homepage);
router.post('/customer',customerController.addPOSTcustomer);
router.get('/customer/customerviews/:id',customerController.view_customer);
router.get('/customer/customerviews/:id/update',customerController.update_customer);


// routes for books
router.get('/books/',bookController.books_homepage);


module.exports =router;