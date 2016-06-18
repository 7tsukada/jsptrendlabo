var express = require('express');
var router = express.Router();

router.get('/message', function(req, res) {
    var messages = [
            {
                message: "message1",
                post: "1999-1-1 14:30"
            },
            {
                message: "message2",
                post: "2009-12-13 5:20"
            },
        ];
    res.render('kyoshi/message', { "messages": messages });
});

router.get('/message/post', function(req, res) {
    res.redirect('../message');
});

module.exports = router;