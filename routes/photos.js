'use strict';
const express = require('express');
const router = express.Router();

router.get('/:text', (req, res, next) => {
  res.send(req.params.text);
});

module.exports = router;