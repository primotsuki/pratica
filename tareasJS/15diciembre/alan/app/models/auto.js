'use strict';
module.exports = (sequelize, DataTypes) => {
  var Auto = sequelize.define('Auto', {
    nombre: DataTypes.STRING,
    modelo: DataTypes.INTEGER,

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Auto.associate = function (models) {
    models.Auto.belongsTo(models.usuario, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Auto;
};