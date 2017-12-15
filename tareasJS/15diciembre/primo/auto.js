'use strict';
module.exports = (sequelize, DataTypes) => {
  var auto = sequelize.define('auto', {
    marca: DataTypes.STRING,
    modelo: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.auto.belongsTo(models.persona,{
          onDelete: "CASCADE",
          foreignkey: {
            allowNull: false
          }
        });
      }
    }
  });
  return auto;
};