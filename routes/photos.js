'use strict';
const express = require('express');
const router = express.Router();

router.get('/:originalPath', (req, res, next) => {
  res.send(req.params.originalPath);
});

module.exports = router;