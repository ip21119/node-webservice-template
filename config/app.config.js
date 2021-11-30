const {
    NODE_ENV,
    APP_NAME,
    APP_PROTOCOL,
    APP_HOST,
    APP_PORT,
    DB_DIALECT,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT
  } = process.env;
  
  let env = NODE_ENV === 'development' || NODE_ENV === 'dev' ? 'dev' : 'dev';
  env = NODE_ENV === 'test' ? 'test' : env;
  env = NODE_ENV === 'staging' || NODE_ENV === 'stag' ? 'stag' : env;
  env = NODE_ENV === 'production' || NODE_ENV === 'prod' ? 'prod' : env;
  
  const dev = {
    
  
  };
  
  const test = {
   
  
  };
  
  const stag = {
   
  };
  
  const prod = {
    
  };
  
  const common  = {
    env,
    protocol: APP_PROTOCOL,
    appName: APP_NAME,
    appHost: APP_HOST,
    appPort: APP_PORT,
    db: {
      dbDialect: DB_DIALECT,
      dbHostName: DB_HOST,
      dbName: DB_NAME,
      dbUserName: DB_USERNAME,
      dbPassword: DB_PASSWORD,
      dbPort: DB_PORT
    },
  }
  let config = {...common,...dev};
  
  if (NODE_ENV === 'dev') {
    config = {...common,...dev};
  }
  if (NODE_ENV === 'test') {
    config = {...common,...test};
  }
  if (NODE_ENV === 'stag') {
    config = {...common,...stag};
  }
  if (NODE_ENV === 'prod') {
    config = {...common,...prod};
  }
  
  module.exports = config;
  