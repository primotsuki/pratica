const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

var li = {'init':'<li>','end':'</li>'};
var ul = {'init':'<ul>','end':'</ul>'};
var ol = {'init':'<ol>','end':'</ol>'};
var h2 = {'init':'<h2>','end':'</h2>'};
var dd = {'init':'<dd>','end':'</dd>'};

var usuarios = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/usuarios',function(request,response){
    response.send(usuarios);
    response.end("OK");
})

app.post('/usuarios',function(request,response){
    var usuario = request.body;
    usuario.id = _.uniqueId();

    usuario.autos = [];

    usuarios.push(usuario);
    response.end("OK");
});

app.post('/autos',function(request,response){
    var auto = request.body;
    for (var key in usuarios) {
        if(auto.idUsuario == usuarios[key].id){
            usuarios[key].autos.push(auto);
        }
    }    
    //response.redirect('http://localhost/workspace/');
    response.end("OK");
});


app.get('/usuarios/:id',(request, response)=>{
    var id =request.params.id;
    for (var key in usuarios) {
        if(usuarios[key].id == id){
            response.send(usuarios[key]);
        }
    } 
    response.end("OK");
});

app.put('/usuarios/:id',(request, response)=>{
    var id=request.params.id;
    for (var key in usuarios) {
        if(usuarios[key].id == id){
            usuarios[key] = request.body;
        }
    } 
    response.end("OK");
});

app.delete('/usuarios/:id',(request, response)=>{
    var id=request.params.id;
    for(var key in usuarios){
        if(usuarios[key].id == id){
            usuarios.splice(key,1);
        }
    }
    response.end("OK");
});

app.get('/usuarios/:id/autos',(request,response)=>{
    var id =request.params.id;
    for(var key in usuarios){
        if(usuarios[key].id == id){
            var autos = usuarios[key].autos;
            response.send(autos);
        }
    }
    response.end("OK");
})

app.delete('/usuarios/:id/autos',(request,response)=>{
    var id =request.params.id;
    for(var key in usuarios){
        if(usuarios[key].id == id){
            usuarios[key].autos = [];
        }
    }
    response.end("OK");
})

app.get('/usuarios/:id/autos/:idAuto',(request,response)=>{
    var id =request.params.id;
    var idAuto = request.params.idAuto;
    for(var key in usuarios){
        if(usuarios[key].id == id){
            var autos = usuarios[key].autos;
            response.send(autos[idAuto - 1]);
        }
    }
    response.end("OK");
})

app.delete('/usuarios/:id/autos/:idAuto',(request,response)=>{
    var id = request.params.id;
    var idAuto = request.params.idAuto;
    for(var key in usuarios){
        if(usuarios[key].id == id){
            usuarios[key].autos.splice((idAuto - 1), 1);
        }
    }
    response.end("OK");
})

app.put('/usuarios/:id/autos/:idAuto',(request,response)=>{
    var id =request.params.id;
    var idAuto = request.params.idAuto;
    for(var key in usuarios){
        if(usuarios[key].id == id){
            usuarios[key].autos[idAuto - 1] = request.body;
        }
    }
    response.end("OK");
})

app.listen(3000, function(){
    console.log('Servidor corrieno en el puerto 3000!');
});