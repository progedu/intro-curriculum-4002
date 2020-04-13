'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
});

router.get('/hoge', (req, res, next) => {
  res.send(req.params.hoge);
});

module.exports = router;