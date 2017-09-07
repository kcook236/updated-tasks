'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todolist = sequelize.define('Todolist', {
    task: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todolist;
};
