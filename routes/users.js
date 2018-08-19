var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.param('title', (req, res, next, title) => {
  res.send(title);
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;
