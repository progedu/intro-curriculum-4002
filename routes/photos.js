'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// URLに含まれる文字列(:title)をページに表示
router.get('/:title', (req, res, next) => {
  // スクリプトを埋め込まれないように変更
  res.writeHead(200, {
    'Content-type': 'text/plain; charset=utf-8'
  });
  res.write(req.params.title);
  res.end();
});

module.exports = router;
