var models = require('../models');
    exports.obtenerusuario = function(request, response){
        models.usuario.findAll({}).then(function(usuarios) {
            response.send(usuarios);
          });
    }

    exports.crearusuario = function(request, response){
        var usuario = request.body;
        models.usuario.create(usuario).then(function(){
          response.send('usuario creado');
        });
    }

    exports.actualizarusuario = function(request, response){
        var usuario_id = request.params.id;
        models.usuario.update(request.body,{
          where: {
            id: usuario_id
          }
        }).then(function(){
            response.send('usuario actualizado');
        });
    } 

    exports.borrarusuario = function(request, response){
        var usuario_id = request.params.id;
        models.usuario.destroy({
          where:{
            id:usuario_id
          }
        }).then(function(){
          response.send('usuario eliminado');
        });
    }

    exports.mostrarauto = function(request, response){
      models.auto.findAll({}).then(function(autos) {
          response.send(autos);
        });
        
  }

    exports.crearauto = function(request, response){
      var auto = request.body;
      models.auto.create(auto).then(function(){
        response.send('auto creado ');
      });
    }