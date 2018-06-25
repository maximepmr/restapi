var mysql = require('mysql');


// On renseigne les informations de la bdd
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'poc'
});

// on lance la connection à la bdd
connection.connect(function(err) {
    if (err) throw err
    console.log('Bien connecté avec la base de données...')
})

module.exports = connection;
