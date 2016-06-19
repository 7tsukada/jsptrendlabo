var express = require('express');
var router = express.Router();

//
//  /dir1/* 向けのアクセスをさばいたり
//  Modelを使うコードを色々書いたり書かなかったり
//

router.get('/foo', function(req, res) {
    res.render('user', { title: 'user/foo' });
});

router.get('/bar', function(req, res) {
    res.render('user', { title: 'user/bar' });
});

module.exports = router;