'use strict';
const express = require('express');
const router = express.Router();

router.get('/:title', (req, res, next) => {
  if (req.params.title) {
    res.send(req.params.title);
  } else {
    res.send('Some photos');
  }
});

module.exports = router;