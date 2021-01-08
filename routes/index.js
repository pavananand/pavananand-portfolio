var express = require('express');
var router = express.Router();

const insertController = require('../controllers/insertRecord.controllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Pavan Anand Portfolio apis")
});

router.post('/insert',insertController.insertData)

module.exports = router;
