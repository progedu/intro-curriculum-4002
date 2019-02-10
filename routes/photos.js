'use strict';
const express = require('express');
const router = express.Router();

router.param('title', (req, res, next, title) => {
  res.send(title);
  next();
});

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;