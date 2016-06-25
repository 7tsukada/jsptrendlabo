var express = require('express');
var router = express.Router();

router.get('/daily/', function(req, res) {
    global.db.Tsuka_Daily.findAll({order: 'date'})
    .then(function(dailies){
        res.render('tsuka_daily', {edit: {}, dailies: dailies});
    })
    .error(function(err){
        res.status(500).send(err);
    });
});

router.get('/daily/:id', function(req, res) {
    global.db.Tsuka_Daily.find({where: {id: req.params.id}})
    .then(function(daily){
        res.render('tsuka_daily', {edit: daily, dailies: []});
    })
    .error(function(err){
        res.status(500).send(err);
    });
});

router.post('/daily/create', function(req, res) {
    global.db.Tsuka_Daily.create({
        date: req.body.date,
        content: req.body.content
    })
    .then(function(daily) {
        res.redirect(req.baseUrl + '/daily');
    })
    .error(function(err) {
        res.status(500).send(err);
    });
});

router.post('/daily/:id/update', function(req, res) {
    global.db.Tsuka_Daily.update({
        date: req.body.date,
        content: req.body.content
    }, {where: {id: req.params.id}})
    .then(function(daily) {
        res.redirect(req.baseUrl + '/daily');
    })
    .error(function(err) {
        res.status(500).send(err);
    });
});

router.post('/daily/:id/delete', function(req, res) {
    global.db.Tsuka_Daily.destroy({where: {id: req.params.id}})
    .then(function(daily) {
        res.redirect(req.baseUrl + '/daily');
    })
    .error(function(err) {
        res.status(500).send(err);
    });
});

module.exports = router;