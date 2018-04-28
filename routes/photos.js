'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('text', (req, res, next, text) => {
  res.send(text);
  next();
})

router.get('/:text', (req, res, next) => {
  res.end();
});

module.exports = router;