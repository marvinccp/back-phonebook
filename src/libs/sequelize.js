const { config } = require('../config');
const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
}

const sequelize = new Sequelize(
  'postgres://marvin:admin246@localhost:5432/my_sbook',
  options
);

setupModels(sequelize);

module.exports = sequelize;
