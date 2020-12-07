var express = require('express');
var router = express.Router();
var controller = require('../controller/jsonController');

/* GET home page. */
router.get('/', function(req, res) {
  var clickedUser = {
    name: req.query.name ? req.query.name : '',
    age: req.query.age ? req.query.age : '',
    gender: req.query.gender ? req.query.gender : '',
    location: req.query.location ? req.query.location : ''
  }
  res.render('index', { 
    title: 'Express',
    users: controller.getUserList(),
    clickedUser
  });
});

module.exports = router;
