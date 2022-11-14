const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController')

//newsController.index
router.get('/', userController.login)
router.post('/auth', userController.auth)


module.exports = router;