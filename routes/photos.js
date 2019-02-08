'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('id', (req, res, next, id) => {
  if (id === 'hoge') {
    res.send(id);
    next();
  } else {
    res.send('未対応のパラメーターです');
  }
});
  


router.get('/:id', (req, res, next) => {
  res.end();
});

module.exports = router;