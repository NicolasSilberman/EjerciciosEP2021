const Sequelize = require('sequelize');

const sequelize = new Sequelize('ejercicio2', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Nicolas',
    lastName: 'Silberman'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });