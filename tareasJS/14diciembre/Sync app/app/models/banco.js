'use strict';
module.exports = (sequelize, DataTypes) => {
  var banco = sequelize.define('banco', {
    nombre_banco: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    nronit: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return banco;
};