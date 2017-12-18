'use strict';
const express = require('express');
const router = express.Router();

router.param('id', (req, res, next, id) => {
  res.send(id);
  next();
});

router.get('/:id', (req, res, next) => {
  res.send(`$id`);
});

module.exports = router;