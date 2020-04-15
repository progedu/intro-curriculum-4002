'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('exs photos');
});

router.get('/:title', (req, res, next) => {
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.send(req.params.title);
});

module.exports = router;