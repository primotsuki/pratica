var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var usuarios = require('./models');
var routes = require('./routes/routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

usuarios.sequelize.sync()
  .then(function() {

    app.use('', routes);

    app.listen(3000, function() {
      console.log('Servidor corriendo en el puerto 3000');
    });
  });

