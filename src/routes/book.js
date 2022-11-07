const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController')

//bookController.show
router.get('/book/list', bookController.show);
router.get('/book/create', bookController.create)
router.post('/book/insert', bookController.insert)




module.exports = router;