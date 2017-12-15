exports.select = function(request, response){
    Usuarios.findAll({}).then(function(usuarios) {
        response.send(usuarios);
    });
    
    console.log("Listando usuarios");
}

exports.selectById = function(request, response){
    var id_usuario = request.params.id_usuario;
    console.log('Buscando usuario con el id: ' + id_usuario);
    Usuarios.findById(id_usuario).then(function(usuarios){
      if(!usuarios){
        response.send('{ "mensaje": "No existen usuarios" }');
      }
  
      response.send(usuarios);
    })
}

exports.insert = function(request, response){
    var usuario = request.body;
    
    Usuarios.create(usuario).then(function(){
        response.send('Usuario creado!!!');
    });
}

exports.update = function(request, response){
    var idUser = request.params.idUser;
    var usuario = request.body;
    Usuarios.update(usuario, {
      where: {
        id: {
          [Op.eq]: idUser
        }
      }
    });
    response.end('Usuario modificado');
}

exports.delete = function(request, response){
    var idUser = request.params.idUser;
    Usuarios.destroy( {
      where: {
        id: idUser
      }
    });
    response.end('Usuario eliminado!!!');
}