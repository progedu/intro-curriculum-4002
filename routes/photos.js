'use strict';
const express = require('express');
const router = express.Router();

router.param('piyo', (req, res, next, piyo) => {
  res.send(piyo);
  next();
});

router.get('/:piyo', (req, res, next) => {
  console.log('get called');
  res.end();
});

module.exports = router;
