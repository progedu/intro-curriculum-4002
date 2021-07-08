'use strict';
const express = require('express');
const router = express.Router();

// パスにhogeがあった場合、hogeをbodyに送る
router.param('hoge', (req, res, next, hoge) => {
  res.send(hoge);
  next();
});
 
router.get('/:hoge', (req, res, next) => {
  res.end();
});


router.get('/', (req, res, next) => {
  res.send('Some photos');
});

module.exports = router;