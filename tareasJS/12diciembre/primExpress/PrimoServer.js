const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

var usuarios = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/usuarios', function(request, response) {
    response.send(usuarios); //devuelve array de usuarios
});

// Crea un nuevo usuario
app.post('/usuarios', function(request, response) {
    var usuario = request.body;
    usuario.id = _.uniqueId();

    usuarios.push(usuario);
    response.end("OK");
});

app.get('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==idb)
            response.send(arr[index]);
    })
});
app.put('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==idb)
        {
            arr[index]=request.body;
            arr[index].id=idb;
        }

    })
});
app.delete('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        arr.splice(index,1);
        usuarios=arr;
    })
});

app.listen(3000, function() {
    console.log('Servidor corriend en el puerto 3000!');
});


