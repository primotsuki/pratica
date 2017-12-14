'use strict';
module.exports = (sequelize, DataTypes) => {
  var persona = sequelize.define('persona', {
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return persona;
};