var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Embeded hosted checkout' });
});

router.get('/no-allow-payment', function(req, res, next) {
  res.render('no-allow-payment', { title: 'Embeded hosted checkout' });
});


module.exports = router;
