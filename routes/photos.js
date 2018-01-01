'use strict';
const express = require('express');
const router = express.Router();

router.param('id', (req, res, next, id) => {
  res.send(id);
  next();
});

router.get('/:id', (req, res, next) => {
  res.end();
});

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

module.exports = router;
