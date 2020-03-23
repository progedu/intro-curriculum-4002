'use strict';
const express = require('express');
const router = express.Router();

router.get('/:hoge', (req, res, next) => {
  res.send(req.params.hoge);
});

module.exports = router;