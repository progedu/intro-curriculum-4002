'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:something', (req, res, next) => {
  res.send(req.params.something);
});

module.exports = router;