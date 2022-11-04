const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController')

//newsController.index
router.get('/', loginController.index)



module.exports = router;