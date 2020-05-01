'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.send(req.params.id);
});

module.exports = router;