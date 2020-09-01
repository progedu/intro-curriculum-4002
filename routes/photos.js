'use strict';
const express = require('express');
const router = express.Router();

router.get('/:kokonomozihananndemoiinoka', (req, res, next) => {
  res.send(req.params.kokonomozihananndemoiinoka);
});

module.exports = router;