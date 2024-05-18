var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.home);

router.post('/login', controller.login);

module.exports = router;
