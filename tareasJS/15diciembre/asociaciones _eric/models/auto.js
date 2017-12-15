'use strict';
module.exports = (sequelize, DataTypes) => {
  var auto = sequelize.define('auto', {
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.auto.belongsTo(models.usuario, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return auto;
};