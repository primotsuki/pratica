var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var model = require('./app/models');
var routes = require('./app/routes/routes');

var personas = require('./app/routes/personas');

var autos = require('./app/routes/autos');

var app = express();
const Op = model.Sequelize.Op;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.get('/personas',personas.ObtenerUsuarios);

routes.post('/personas', personas.CrearUsuario);

routes.put('/personas/:id_persona',personas.ModificaUsuario);

routes.delete('/personas/:id_persona',personas.EliminaUsuario );


routes.get('/autos',autos.obtenerAutos);

routes.post('/persona/:id_persona/auto',autos.AgregarAutos);

routes.delete('/personas/:id_persona/auto/:id_auto',autos.BorrarAuto)

routes.put('/personas/:id_persona/auto/:id_auto',autos.ModificaAuto)

app.all('*',function(req,res,next){
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','http://localhost:4200');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});

model.sequelize.sync()
  .then(function() {

    app.use('/api/', routes);

    app.listen(3000, function() {
      console.log('Servidor corriendo en el puerto 3000');
    });
  });

