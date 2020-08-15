'use strict';
const express = require('express');
const router = express.Router();

router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;