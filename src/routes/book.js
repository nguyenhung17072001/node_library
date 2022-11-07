const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController')

//bookController.show
router.get('/book/list', bookController.show)



module.exports = router;