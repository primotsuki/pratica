//americo aduviri peralta



const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');


const app = express();
var cont=1;
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
      usuario.id=_.uniqueId();
    //usuario.nombre=request.body.n;
    //usuario.id=request.body.c;
         usuario.autos=[];   
    usuarios.push(usuario);
    response.end("-------OK------");
});

app.post('/usuarios/:usuario_id/autos', function(request, response) {
    var auto = request.body;
    var aux;
    
     
     
      var usuario_id= request.params.usuario_id;
      for(var i=0;i<usuarios.length;i++)
      {
          if(usuarios[i].id==usuario_id)
          {
             aux=i  ;
            
          }
      }

       if(usuarios[aux].autos.length==0)
       {
        auto.id=cont;
       }
       else
       {
           var s=usuarios[aux].autos.length;
          auto.id=s+1;
       }     
    //usuario.nombre=request.body.n;
    //usuario.id=request.body.c;
         
         usuarios[aux].autos.push(auto);   
    
    response.end("-------OK------");
});
app.put('/usuarios/:usuario_id/autos/:auto_id', function(request, response) {
    var usuario_id=request.params.usuario_id;
    var auto_id= request.params.auto_id;
    var auto = request.body;
    var aux;
    
    
     
    for(var i=0;i<usuarios.length;i++)
    {
        for(var j=0;j< usuarios[i].autos.length;j++)
        {
           if(usuarios[i].autos[j].id==auto_id)
           {
               aux1=j;
           }
        }
        if(usuarios[i].id==usuario_id)
        {
           aux=i;
        }
    }

    auto.id=usuarios[aux].autos[aux1].id;  
    
         usuarios[aux].autos[aux1]=auto;   
    
    response.end("-------OK------");
});

app.delete('/usuarios/:usuario_id/autos/:auto_id',function(request,response){
        var usuario_id=request.params.usuario_id;
        var auto_id= request.params.auto_id;
        var aux1;
        for(var i=0;i<usuarios.length;i++)
        {
            for(var j=0;j< usuarios[i].autos.length;j++)
            {
               if(usuarios[i].autos[j].id==auto_id)
               {
                   aux1=j;
               }
            }
            if(usuarios[i].id==usuario_id)
            {
               aux=i;
            }
        }
        if(aux1==undefined)
        {response.send("id inexistente");
        }
    
        usuarios[aux].autos.splice(aux1, 1);
    });



app.listen(8080, function() {
    console.log('Servidor corriend en el puerto 8080');
});

