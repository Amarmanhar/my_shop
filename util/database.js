const Sequelize = require('sequelize');

const sequelize = new Sequelize('productdata', 'root', 'Amar@123',{
    dialect: 'mysql',
    host:'localhost',
});


module.exports = sequelize;