'use strict';
const express = require('express');
const router = express.Router();

router.get('/:path', (req, res, next) => {
  res.send(req.params.path);
});

module.exports = router;