var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    global.db.Tsuka_Daily.findAll({order: 'date'})
    .then(function(dailies){
        res.render('tsuka_daily', {dailies: dailies});
    })
    .error(function(err){
        res.status(500).send(err);
    });
});

router.post('/create', function(req, res) {
    global.db.Tsuka_Daily.create({
        date: req.body.date,
        content: req.body.content
    })
    .then(function(user) {
        res.redirect(req.baseUrl);
    })
    .error(function(err) {
        res.status(500).send(err);
    });
});

module.exports = router;