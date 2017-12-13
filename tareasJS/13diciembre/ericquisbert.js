const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
var Router = require('router');

var router = Router();

const app = express();

var usuarios = [];
var autos = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//devuelve array de usuarios

app.get('/usuarios', function(request, response) {
    response.send(usuarios); 
});


// Crea un nuevo usuario
app.post('/usuarios', function(request, response) {
    var usuario = request.body;
    usuario.id = _.uniqueId();
    usuario.autos = [];
    usuarios.push(usuario);
    response.end("OK");
});

//crea los autos para cada usuario

app.post('/usuarios/:usuario_id/autos', function(request, response) {
    var usuario_id=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==usuario_id)
        {
            var auto = request.body;
            auto.id = _.uniqueId;
            arr[index].autos.push(auto);
            
        }
    });
    response.send('OK');
});


//devuelve el usuario con sus autos

app.get('/usuarios/:usuario_id/autos',(request, response)=>{
    var usuario_id=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==usuario_id){
            response.send(arr[index]);   
        }
    });
    response.send('OK');
});


app.put('/usuarios/:usuario_id',(request, response)=>{
    var usuario_id=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==usuario_id)
        {
            arr[index]=request.body;
            arr[index].id=usuario_id;
        }
    });
    response.end('OK');
});

app.put('/usuarios/:usuario_id/autos',(request, response)=>{
    var usuario_id=request.params.usuario_id;
    var auto_id=request.params.auto_id;
    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==usuario_id)
        {
            var auto = request.body;
            autos.forEach((val,index,arr)=>{
                auto.id =_.uniqueId;
                arr[index].autos.push(auto);
            });
        }
    });
    response.end('OK');
});

app.delete('/usuarios/:usuario_id',(request, response)=>{
    var usuario_id=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        arr.splice(index,1);
        usuarios=arr;
    });
    response.end('OK');
});

app.delete('/usuarios/:usuario_id/autos',(request, response)=>{
    var usuario_id=request.params.usuario_id;
    var auto_id=request.params.auto_id; 
    usuarios.forEach((val,index,arr)=>{
        arr.splice(index,1);
        usuarios=arr;
    });
    response.end('OK');
});

app.listen(3000, function() {
    console.log('Servidor corriend en el puerto 3000!');
});

//usuarios tienes autos
//autos de un usuario por id de usuario
//borrar un auto o autos por id de auto /api/usuarios/2
// actualizar un auto 