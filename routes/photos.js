'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('foo', (req, res, next, foo) => {
  // foo の存在チェックが必要。XSS脆弱性対応のため
  res.send(foo);
  next();
});

router.get('/:foo', (req, res, next) => {
  res.end();
});

module.exports = router;
