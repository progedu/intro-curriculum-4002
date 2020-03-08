'use strict';
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
});

module.exports = router;