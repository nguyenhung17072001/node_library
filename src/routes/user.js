const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController')

//newsController.index
router.get('/', userController.login)
router.post('/auth', userController.auth)
router.get('/create', userController.register)
router.post('/create/auth', userController.create)
module.exports = router;