'use strict';
let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

module.exports = router;