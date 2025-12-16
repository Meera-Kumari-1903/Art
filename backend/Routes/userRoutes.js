const express = require('express');
const { loginUser } = require('../Services/user-service');
const userController = require('../Controller/user-controller');
const auth = require('../Middleware/Auth');
const router = express.Router();


router.post('/signup',userController.addNewUser);
router.post('/login',userController.loginUser);
router.get('/logout', auth, userController.logoutUser);


module.exports = router;


