'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('hoge',(req, res, next, title) => {
  res.send(title);
  next();
});

router.get('/hoge', (req, res, next) => {
  res.send('hoge');
});

module.exports = router;