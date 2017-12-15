'use strict';
module.exports = (sequelize, DataTypes) => {
  var carro = sequelize.define('carro', {
    color: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return carro;
};