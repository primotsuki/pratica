var models = require('../models');
const Op = models.Sequelize.Op;


    exports.CrearUsuario = function (req, res) {
        models.persona.create({
            id_persona: req.body.id_persona,
            nombre: req.body.nombre,
        })
        res.end('inserted');
      }
      exports.ObtenerUsuarios = function(req,response){

          models.persona.findAll({include: [models.auto]}).then(function(personas){
            //JSON.parse(personas);
            response.set('Access-Control-Allow-Origin','*');
            response.set('Content-type','application/json');
            response.send(personas);
          })
      }
      
      exports.ObtenerUsuario = function(request, response) {
        
        var idper=request.params.id_persona;
        models.persona.findById(idper).then(function(personas) {
          response.send(personas);
        });
      }
      exports.ModificaUsuario = function (req, res) {
        models.persona.update(req.body,{
          where:{
          id:{  [Op.like]: req.params.id_persona}
          }
        } )
        res.end('updated');
      }

      exports.EliminaUsuario = function (req, res) {
        models.persona.destroy({
          where:{
          id:{  [Op.like]: req.params.id_persona}
          }
        })
        res.end('deleted');
      }
