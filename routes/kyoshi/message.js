var express = require('express');
var router = express.Router();

var toTYODateString = function(date) {
    var tyoDate = new Date();
    tyoDate.setTime(date.getTime() + 32400000);
    var m = tyoDate.getMonth() + 1;
    var d = tyoDate.getDate();
    var hour = tyoDate.getHours();
    var min = tyoDate.getMinutes();
    var sec = tyoDate.getSeconds();
    return ('00' + m).slice(-2) + '/' + ('00' + d).slice(-2) + ' ' + ('00' + hour).slice(-2) + ':' + ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-2);
}

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
        res.render('kyoshi/message', { messages: messages, toTYODateString: toTYODateString });
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