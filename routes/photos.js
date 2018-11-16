'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// パラメータtitleに対する共通処理の記述
router.param('title', (req, res, next, title) => {
  // TODO: 変数titleに対してファイル存在チェックをする for XSS対策
  res.send(title);
  next();
});

router.get('/:title', (req, res, next) => { // プレースホルダとしてtitleを設定 => titleがパラメータとして使える
  res.end();
});

module.exports = router;