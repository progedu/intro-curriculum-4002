'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(id.status || 500);
  res.send(id);
});

module.exports = router;