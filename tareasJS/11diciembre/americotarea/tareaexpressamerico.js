



const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

var usuarios = [{'nombre':'juan','id':'1'},{'nombre':'adan','id':'2'}];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function(request, response) {
    var usuario_id= request.param('id');
    var aux;
     for(var i=0;i<usuarios.length;i++)
     {
         if(usuarios[i].id==usuario_id)
         {
            aux=i;
         }
     }
     
     if(aux!==undefined)
     {
         if(usuarios[aux])
         {
            response.send(usuarios[aux]);
         }
         
     }
     else
     {
           
            response.send(usuarios);
             
     }
    
});





// Crea un nuevo usuario
app.post('/', function(request, response) {
    var usuario = request.body;
 
    //usuario.nombre=request.body.n;
    //usuario.id=request.body.c;
    
    usuarios.push(request.body);
    response.end("-------OK------");
});

app.listen(8080, function() {
    console.log('Servidor corriend en el puerto 8080');
});

