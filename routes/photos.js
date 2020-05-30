'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  const title = req.params.title;
  // XSS対策、未実装
  res.send(title);
});

module.exports = router;