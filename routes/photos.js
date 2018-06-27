'use strict';
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  res.end();
});


router.param('id', (req, res, next, id) => {
  res.send(id);
  next;
});

module.exports = router;