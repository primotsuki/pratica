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
    var data = request.query;
    var resp = "";
    if(data.id !== undefined){
        resp += h2.init + "Usuario Encontrado" + h2.end;
        for (var key1 in usuarios) {
            resp += ul.init;
            if(data.id == usuarios[key1].id){
                var auto = usuarios[key1].autos;
                resp += li.init + "id: " + usuarios[key1].id + li.end;
                resp += li.init + "Nombre: " + usuarios[key1].name + li.end;
                resp += li.init + "Edad  : " + usuarios[key1].edad + li.end;
                resp += li.init + "Autos :" + li.end;
                for(var key2 in auto){
                    resp += dd.init + "- Auto Numero : " + (parseInt(key2) +1) + dd.end;
                    resp += dd.init + "- Marca : " + auto[key2].marca + dd.end;
                    resp += dd.init + "- Año : " + auto[key2].anio + dd.end;
                    resp += dd.init + "------------------------" + dd.end; 
                }
            }
            resp += ul.end;
        } 
    }else{
        resp = recorrido();
    }
    response.send(resp);
})

var recorrido = function(){
    var aux = h2.init + "Lista de Usuarios" + h2.end;
    for (var key1 in usuarios) {
        aux += ul.init;
        var auto = usuarios[key1].autos;
        aux += li.init + "id: " + usuarios[key1].id + li.end;
        aux += li.init + "Nombre: " + usuarios[key1].name + li.end;
        aux += li.init + "Edad  : " + usuarios[key1].edad + li.end;
        aux += li.init + "Autos :" + li.end;
        for(var key2 in auto){
            aux += dd.init + "- Auto Numero : " + (parseInt(key2) +1) + dd.end;
            aux += dd.init + "- Marca : " + auto[key2].marca + dd.end;
            aux += dd.init + "- Año : " + auto[key2].anio + dd.end;
            aux += dd.init + "------------------------" + dd.end; 
        }        
        aux += ul.end;
    } 
    return aux;
}

app.post('/usuarios',function(request,response){
    var usuario = request.body;
    usuario.id = _.uniqueId();
    usuario.autos = [];

    usuarios.push(usuario);
    //response.end("OK");
    response.redirect('http://localhost/workspace/');
})
app.post('/autos',function(request,response){
    var auto = request.body;
    for (var key in usuarios) {
        if(auto.idUsuario == usuarios[key].id){
            usuarios[key].autos.push(auto);
        }
    }    
    response.redirect('http://localhost/workspace/');
    //response.end("OK");
});

app.listen(3000, function(){
    console.log('Servidor corrieno en el puerto 3000!');
});
