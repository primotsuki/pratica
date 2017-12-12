//americo aduviri peralta



const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

var usuarios = [];
var mensaje ={"mensaje":"id_desconocido"};
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/usuarios/:usuario_id', function(request, response) {
    var usuario_id= request.params.usuario_id;
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
         
         
            response.send(usuarios[aux]);
         
         
     }
     else
     {
           
               
            response.send(usuarios);
        
            
             
     }
    
});

app.delete('/usuarios/:usuario_id',function(request,response){

    var usuario_id= request.params.usuario_id;
    for(var i=0;i<usuarios.length;i++)
    {
        if(usuarios[i].id==usuario_id)
        {
           aux=i;
        }
    }

    usuarios.splice(aux, 1);
});

app.put('/usuarios/:usuario_id',function(request,response){
    
        var usuario_id= request.params.usuario_id;
        for(var i=0;i<usuarios.length;i++)
        {
            if(usuarios[i].id==usuario_id)
            {
               aux=i;
            }
        }
    
        usuarios[aux]=request.body;
    });

app.get('/usuarios', function(request, response) {
               
            response.send(usuarios);
        
            
             
     
    
});





// Crea un nuevo usuario
app.post('/usuarios', function(request, response) {
    var usuario = request.body;
      
    //usuario.nombre=request.body.n;
    //usuario.id=request.body.c;
    
    usuarios.push(usuario);
    response.end("-------OK------");
});
    

app.listen(8080, function() {
    console.log('Servidor corriend en el puerto 8080');
});

