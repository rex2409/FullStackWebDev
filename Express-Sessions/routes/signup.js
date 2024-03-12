const path = require('path');
const express = require('express');
const router = express.Router();

const signupController = require('../controller/signup');

router.get('/',signupController.getSignup);

router.post('/',signupController.postSignup);

module.exports=router;
