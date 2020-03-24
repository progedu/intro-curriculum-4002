'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// /:title のパスとパラメータでGETメソッドでアクセスされたとき、
// :title　のtitleはパラメータ名
router.get('/:title', (req, res, next) => {
  //req.params.title によって、パラメータtitleの値を受け取る
  res.send(req.params.title);
});

module.exports = router;