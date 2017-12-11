const http = require('http'); 
const express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var formulario = '<form method="post" action="/autos">'
            + '<input type="text" name="id" id="id" placeholder="id">'
            + '<input type="text" name="nombre" id="nombre" placeholder="nombre">'
            + '<input type="text" name="marca" id="marca" placeholder="marca">'
            + '<input type="submit" value="Enviar">'
            + '</form>';

var cabecera = '<h1>Datos del autos</h1>';

app.post('/autos', function(req, res){
    res.send(req.body);
    res.end("ok");

    });

app.get('/autos', function(req, res){
    res.send('<html><body>'
            + cabecera
            + formulario
            + '</html></body>'
        );
});

app.listen(3000, function(){
    console.log('Server corriendo en el puerto 3000');
});