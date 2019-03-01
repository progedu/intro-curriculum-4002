'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// TODO Q1.XSS脆弱性の対策を行え
router.param('id', (req, res, next, id) => {
  res.send(id);
  next();
});

router.get('/:id', (req, res, next) => {
  res.end();
});

module.exports = router;