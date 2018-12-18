'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('hoge', (req, res, next, hoge) => {
  res.send(hoge);
//  console.info('param');
  next();
});

router.get('/:hoge', (req, res, next) => {
//  console.info('get');
  res.end();
});

module.exports = router;