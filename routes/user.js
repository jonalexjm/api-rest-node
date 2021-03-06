'use strict'
var express = require('express');
var UserController = require('../controllers/user');

var router = express.Router();

router.get('/probando', UserController.probando);
router.post('/probando', UserController.testeando);

module.exports = router;