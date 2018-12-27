'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('"http://localhost:8000/photos/"の後に何か文字を入れてアクセスしてみて下さい');
});

//パラメータに対する処理
router.param('title', (req, res, next, title) => {
  //titleとその文字数を返すようにしてみました
  title = `"${title}"という${title.length}文字のパラメータが付いていました`;
  res.send(title);
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;
