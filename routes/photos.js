'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('title', (req, res, next, title) => {
  // ここで、変数 title の内容をもとに存在チェック
  if (title === 'hoge'){
    res.send(title);
  } else {
    res.send('させるかあ!!');
  }
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;