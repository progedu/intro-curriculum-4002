'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// テスト問題
router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

// 画像表示
/*router.get('/:id', (req, res, next) => {
  res.render('index', {image: req.params.id});
})*/

module.exports = router;