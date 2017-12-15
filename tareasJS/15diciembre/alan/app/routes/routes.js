const express = require('express');
const router = express.Router();

const Usuarios = require('../models').usuario;
const Autos = require('../models').auto;
const Op = require('../models').Sequelize.Op;
var user = require('./usuarios');
var auto = require('./autos');

Usuarios.hasMany(Autos, {foreignKey: 'idUser'});

router.get('/usuarios', user.select);
router.get('/usuarios/:id_usuario', user.selectById);
router.post('/usuarios', user.insert);
router.put('/usuarios/:idUser', user.update);
router.delete('/usuarios/:idUser', user.delete);

Usuarios.hasMany(Autos, {foreignKey: 'idUser'});

router.get('/autos', auto.select);
router.get('/autos/:idAuto', auto.selectById);
router.post('/autos', auto.insert);
router.put('/autos/:idAuto', auto.update);
router.delete('/autos/:idAuto', auto.delete);

module.exports = router;