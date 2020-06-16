'use strict';
const express = require('express');
const router = express.Router();

router.get('/:id?', (req, res, next) => {
  if (req.params.id) {
    res.send(req.params.id);
  } else {
    res.send('Some photos');
  }
});

module.exports = router;