var express = require('express');
var router = express.Router();

var models = require('../models');

router.get('/usuarios', function(request, response) {
  models.Usuario.findAll({}).then(function(usuarios) {
    response.send(usuarios);
  });
});

module.exports = router;