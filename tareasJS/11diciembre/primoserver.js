const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

var usuarios = ['{"nombre":"primo"}'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response) {
    response.send(usuarios); //devuelve array de usuarios
});

// Crea un nuevo usuario
app.post('/', function(request, response) {
    //var usuario = request.body;
    //usuario.nombre = _.();

    usuarios.push(request.body);
    response.end(JSON.stringify(request.body));
});

app.listen(3000, function() {
    console.log('Servidor corriend en el puerto 3000!');
});

