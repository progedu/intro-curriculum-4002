'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('id', (req, res, next, id) => {
  res.send(id);
  next();
});

// router.param('title', (req, res, next, title) => {
//
// })

router.get('/:id', (req, res, next) => {
  res.end();
});

module.exports = router;
