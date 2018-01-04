'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('title', (req, res, next, title) => {
  switch(title) {
    case 'title':
      res.send("タイトルのページ");
      next();
      break;
    case 'hoge':
      res.send("ほげのページ");
      next();
      break;
    default:
      res.send("存在しないページ");
      next();
      break;
  }
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;