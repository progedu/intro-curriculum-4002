'use strict';
const express = require('express');
const router = express.Router();

router.get('/:ids', (req, res, next) => {
  res.send(req.params.ids);
});

module.exports = router;