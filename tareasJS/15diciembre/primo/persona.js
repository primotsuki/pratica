'use strict';
module.exports = (sequelize, DataTypes) => {
  var persona = sequelize.define('persona', {
    nombre: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        models.persona.hasMany(models.auto);
      }
    }
  });
  return persona;
  
};