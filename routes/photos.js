'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('hoge', (req, res, next, id) => {
  next();
});

router.get('/hoge', (req, res, next) => {
  res.send('hoge');
  res.end();
});

module.exports = router;
