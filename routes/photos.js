'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:display_characters', (req, res, next) => {
  res.send(req.params.display_characters);
});

module.exports = router;