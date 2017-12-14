var express = require('express');
var router = express.Router();

var models = require('../models');

var usuarios = models.usuarios;

router.get('/usuarios', function(request, response) {
  usuarios.findById(1).then(function(usuarios) {
    response.send(usuarios);
  });
  
  console.log("Listando usuarios");
});

module.exports = router;