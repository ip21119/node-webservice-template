const config = require('./app.config');
const logger = require('../helpers/logger.helper');

const {
  db: {
 dbDialect, dbHostName, dbName, dbUserName, dbPassword 
}
} = config;

module.exports = {
  development: {
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    host: dbHostName,
    dialect: dbDialect,
    dialectOptions: {
      useUTC: true // for reading from database
    },
    logging: msg => logger.debug(msg)
  },
  test: {
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    host: dbHostName,
    dialect: dbDialect,
    logging: msg => logger.debug(msg)
  },
  production: {
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    host: dbHostName,
    dialect: dbDialect,
    logging: msg => logger.debug(msg)
    /* dialectOptions: {
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      }
    } */
  }
};
