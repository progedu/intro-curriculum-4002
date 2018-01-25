'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

var escapeHTML = function (str) {
  return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
};

router.param('title', (req, res, next, title) => {
  title = escapeHTML(title);
  res.send(title);
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;
