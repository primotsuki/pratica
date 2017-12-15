var models = require('../models');
const Op = models.Sequelize.Op;
    exports.CrearUsuario = function (req, res) {
        tablas.persona.create({
            id_persona: req.body.id_persona,
            nombre: req.body.nombre,
        })
        res.end('inserted');
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
