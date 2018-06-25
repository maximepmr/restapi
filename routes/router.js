/**
 * Created by maxim on 24/06/2018.
 */
//
// pour utiliser la connexion à la bdd
var db = require('../models/dbconnection');

var app = require('express')
    , router = app.Router()


// récupérer tous les customer
router.get('/customer', function (req, res) {
    db.query('select * from customer', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
// récupérer un customer avec l'id
router.get('/customer/:id', function (req, res) {
    db.query('select * from customer where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

// Pour ajouter un customer
router.post('/customer', function (req, res) {
    var params  = req.body;
    console.log(params);
    db.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

// Pour mettre à jour
router.put('/customer', function (req, res) {
    db.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

// Pour supprimer
router.delete('/customer', function (req, res) {
    console.log(req.body);
    db.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
        if (error) throw error;
        res.end('L\'enregistrement a été supprimé!');
    });
});

module.exports = router;
