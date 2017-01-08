'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

//パスのパラメーターに title という項目がを確認
router.param('title', (req, res, next, title) => {
  res.send(title);
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;