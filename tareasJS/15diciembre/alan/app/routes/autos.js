exports.select = function(request, response){
    Autos.findAll({}).then(function(usuarios) {
        response.send(usuarios);
    });
    
    console.log("Listando usuarios");
}

exports.selectById = function(request, response){
    var idAuto = request.params.idAuto;
    console.log('Buscando usuario con el id: ' + idAuto);
    Autos.findById(idAuto).then(function(autos){
      if(!autos){
        response.send('{ "mensaje": "No existen usuarios" }');
      }
  
      response.send(autos);
    })
}

exports.insert = function(request, response){
    var auto = request.body;
    
    Autos.create(auto).then(function(){
        response.send('Auto creado!!!');
    });
}

exports.update = function(request, response){
    var idUser = request.params.idUser;
    var auto = request.body;
    Autos.update(auto, {
      where: {
        id: {
          [Op.eq]: idUser
        }
      }
    });
    response.end('Auto modificado');
}

exports.delete = function(request, response){
    var idAuto = request.params.idAuto;
    Autos.destroy( {
      where: {
        id: idAuto
      }
    });
    response.end('Auto eliminado!!!');
}
