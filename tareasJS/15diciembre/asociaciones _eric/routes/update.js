var express = require('express');
var router = express.Router();

var models = require('../models');

router.update('/usuarios', function(request, response){
    models.Usuario.updatedAt({}).then(function(usuarios){
        response.send(usuarios);
    });
});

module.exports = router;