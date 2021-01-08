var express = require('express');
var router = express.Router();


const visitorsController = require('../controllers/visitors.controllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Pavan Anand Portfolio apis")
});

router.get('/getVisitors',visitorsController.getData)
router.post('/insert',visitorsController.insertData)

module.exports = router;
