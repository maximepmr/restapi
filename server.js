var express = require('express');
var app = express();
var router = require('./routes/router');

// on lance le serveur sur le port 3000
var server = app.listen(3000);

// Routeur pour ne pas surcharger la page server
app.use(router);
