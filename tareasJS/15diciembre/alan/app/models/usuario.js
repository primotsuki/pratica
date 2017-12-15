'use strict';
module.exports = (sequelize, DataTypes) => {
  var usuario = sequelize.define('usuario', {
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usuario;
};