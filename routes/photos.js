'use strict';
const express = require('express');
const router = express.Router();

//router.get('/', (req, res, next) => {
//  res.send('Some photos');
//});

router.get('/:title', (req, res, next) => {
  //以下、脆弱性対策3つ
  //const title = req.params.title;// ここで、変数 title の内容をもとに存在チェック
  //res.header('Content-Type', 'text/plan;charset=utf-8');//プレーンテキストとして
  res.json(req.params.title);//Json形式で返す
});

module.exports = router;