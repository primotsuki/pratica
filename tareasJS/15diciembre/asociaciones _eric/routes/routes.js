var express = require('express');
var router = express.Router();
var models = require('../models');
var obtenerusuario = require('./usuarioes');
var crearusuario = require('./usuarioes');
var actualizarusuario = require('./usuarioes');
var borrarusuario = require('./usuarioes');
var mostrarauto = require('./usuarioes');
var crearauto = require('./usuarioes');

router.get('/usuarios', obtenerusuario.obtenerusuario);
router.post('/usuarios', crearusuario.crearusuario);
router.put('/usuarios/:id', actualizarusuario.actualizarusuario);
router.delete('/usuarios/:id',borrarusuario.borrarusuario);
router.get('/autos', mostrarauto.mostrarauto);
router.post('/autos/:id', crearauto.crearauto);

module.exports = router;