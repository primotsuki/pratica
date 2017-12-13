const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();
var router = express.Router();


var usuarios = [];

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

router.get('/usuarios', function(request, response) {
    response.send(usuarios); //devuelve array de usuarios
});

// Crea un nuevo usuario
router.post('/usuarios', function(request, response) {
    var usuario = request.body;
    usuario.id = _.uniqueId();
     usuario.autos = [];
    usuarios.push(usuario);
    response.end("OK");
});
//crea auto
router.post('/usuarios/:usuario_id/autos', function(request, response){
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

router.get('/usuarios/:usuario_id/autos', function(request, response){
    var idb=request.params.usuario_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                   response.send(usuarios[index].autos);
                }   
        })
        response.end("OK");
});

router.get('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;

    usuarios.forEach((val,index,arr)=>{
        if(arr[index].id==idb)
            response.send(arr[index]);
    })
    response.end("OK");
});
router.put('/usuarios/:usuario_id',(request, response)=>{
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
//modificar autos
router.put('/usuarios/:usuario_id/auto/:auto_id', function(request, response){
    var idb=request.params.usuario_id;
    var ida=request.params.auto_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                    arr[index].autos.forEach((val,indice,array)=>{
                        if(array[indice].id==ida)
                        {
                            array[indice]=request.body;
                            array[indice].id=ida;
                            usuarios[index].autos=array;

                        }
                    })
                }
        })
        response.end("OK");
});


router.delete('/usuarios/:usuario_id',(request, response)=>{
    var idb=request.params.usuario_id;
    usuarios.forEach((val,index,arr)=>{
        arr.splice(index,1);
        usuarios=arr;
    })
});

router.delete('/usuarios/:usuario_id/autos', function(request, response){
    var idb=request.params.usuario_id;
        usuarios.forEach((val,index,arr)=>{
            if(arr[index].id==idb)
                {
                    usuarios[index].autos=[];
                }
        })
        response.end("OK");
});

router.delete('/usuarios/:usuario_id/auto/:auto_id', function(request, response){
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

app.use('/api',router);

app.listen(3000, function() {
    console.log('Servidor corriend en el puerto 3000!');
});


