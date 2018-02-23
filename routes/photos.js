'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('id', (req, res, next, id) => {
  res.send(id);
  next();
});

router.get('/:id', (req, res, next) => {
  res.end();
});

router.param('title', (req, res, next, title) => {
  // ここで、変数 title の内容をもとに存在チェック
});

module.exports = router;