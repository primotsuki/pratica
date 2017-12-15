var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var tablas = require('./app/models');
var routes = require('./app/routes/routes');

var personas = require('./app/routes/personas');

var app = express();
const Op = tablas.Sequelize.Op;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.post('/personas', personas.CrearUsuario);

routes.put('/personas/:id_persona',personas.ModificaUsuario);

routes.delete('/personas/:id_persona',personas.EliminaUsuario );

tablas.sequelize.sync()
  .then(function() {

    app.use('/api/', routes);

    app.listen(3000, function() {
      console.log('Servidor corriendo en el puerto 3000');
    });
  });

