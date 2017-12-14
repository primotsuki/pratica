var Sequelize =require('sequelize');
var models=require('./models');


var p;
p=models.perros.build({
   id:12,
   edad:20 
});
p.save()

