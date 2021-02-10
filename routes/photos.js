'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// URLに含まれる文字列(:title)をページに表示
router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;
