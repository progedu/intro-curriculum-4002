'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  id = id.replace(/\&/g, "&amp;").replace(/\"/g, '&quot;').replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
  res.send(`${id}`);
});

module.exports = router;