const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('products' , {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true,
      },
      name:Sequelize.STRING,
      
      price:{
        type: Sequelize.DOUBLE,
        allowNull : false,
      },   
});

module.exports = Expense;