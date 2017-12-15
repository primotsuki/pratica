var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var usuarios = require('./app/models');
var routes = require('./app/routes/routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

usuarios.sequelize.sync()
  .then(function() {

    app.use('/api/', routes);

    app.listen(3000, function() {
      console.log('Servidor corriendo en el puerto 3000');
    });
  });

