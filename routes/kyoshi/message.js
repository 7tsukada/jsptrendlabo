var express = require('express');
var router = express.Router();

router.get('/message', function(req, res) {
    res.redirect(req.baseUrl + '/message/list');
});

router.get('/message/list', function(req, res) {
    var KyoshiMessage = global.db.KyoshiMessage;
    KyoshiMessage.findAll({order: 'post DESC'})
    .error(function(err){
        res.send(err);
    })
    .then(function(messages){
        res.render('kyoshi/message', { messages: messages });
    });
});

router.post('/message/post', function(req, res) {
    var KyoshiMessage = global.db.KyoshiMessage;
    var message = req.body.message;
    var posted = new Date();
    KyoshiMessage.create({
        message: message, 
        post: posted
        
    })
    .error(function(err){
        res.send(err);
    })
    .then(function(result){
        res.redirect(req.baseUrl + '/message/list');
    });
});

module.exports = router;