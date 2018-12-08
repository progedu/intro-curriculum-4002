'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// URLに与えられた文字列を表示させる
router.param('id', (req, res, next, id) => {
  res.send(id);
  next();     //なくても動いた
});

router.get('/:id', (req, res, next) => {
  res.end();
})

//課題の提出とともに、XSS脆弱性の対策をしよう
router.param('title', (req, res, next, title) => {
  // ここで、変数 title の内容をもとに存在チェック
});

module.exports = router;