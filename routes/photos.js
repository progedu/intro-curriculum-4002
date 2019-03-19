'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('title', (req, res, next, title) => {
  res.send(title);
});

router.get('/:title', (res, req, next) => {
  res.end();
});
module.exports = router;