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
     usuario.autos = [];
    usuarios.push(usuario);
    response.end("OK");
});
//crea auto
app.post('/usuarios/:usuario_id/autos', function(request, response){
    var idb=request.params.usuario_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                    var autito=request.body;
                    autito.id=_.uniqueId();
                    usuarios[index].autos.push(autito);
                }
        })
        response.end("OK");
});

app.get('/usuarios/:usuario_id/autos', function(request, response){
    var idb=request.params.usuario_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                   response.send(usuarios[index].autos);
                }   
        })
        response.end("OK");
});

app.get('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;

    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==idb)
            response.send(arr[index]);
    })
    response.end("OK");
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
    response.end("OK");
});
app.delete('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        arr.splice(index,1);
        usuarios=arr;
    })
});

app.delete('/usuarios/:usuario_id/autos', function(request, response){
    var idb=request.params.usuario_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                    usuarios[index].autos=[];
                }
        })
        response.end("OK");
});

app.delete('/usuarios/:usuario_id/auto/:auto_id', function(request, response){
    var idb=request.params.usuario_id;
    var ida=request.params.auto_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                    arr[index].autos.forEach((val,indice,array)=>{
                        if(array[indice].id==ida)
                        {
                            array.splice(indice,1);
                            usuarios[index].autos=array;

                        }
                    })
                }
        })
        response.end("OK");
});

app.listen(3000, function() {
    console.log('Servidor corriend en el puerto 3000!');
});


