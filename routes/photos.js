'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end(`${req.params.id}にアクセスしました`);
})

module.exports = router;