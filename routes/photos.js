'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('練習用');
});

router.param('title', (req, res, next, title) => {
  res.render('photos', {title: title });
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;