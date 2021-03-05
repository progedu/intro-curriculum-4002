var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* */
router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
});


module.exports = router;
