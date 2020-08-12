'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
    res.send(req.params.id);
    //ここで変数idの内容を元に存在チェックが必要　（XSS脆弱性の回避）

});

module.exports = router;