'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('./:title', (err, req, res, next) =>{
  const title = req.params.title;
  title.includes('&lt;script&gt; alert (\'test\'); &lt;/script&gt;') ? err : {};
  res.send(title);
});

module.exports = router;