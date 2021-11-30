const morgan = require("morgan");
// const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
// const OAuth2Server = require('oauth2-server');
const logger = require("../helpers/logger.helper");
// const CommonHelper = require('../helpers/common.helper');
// const { find_permission_by_user_id } = require('../data/query/query');
const appConfig = require("../config/app.config");
/**
 * @description It plays an essential and key role to add middlewares. All request passes
 *              through the middleware.
 */
class MiddlewaresLoader {
  /**
   * @static
   * @description Initializing middleware contains eg security, logger, parsing, request, viewing.
   * @memberOf Middlewares
   * @param {Object} app express object
   * @return
   */
  static init(app) {
    logger.info("Loading application middlewares");

    // security middlewares
    app.use(cors());
    app.use(helmet());
    app.use(compression());

    // http request middlewares
    // parse application/x-www-form-urlencoded
    // app.use(bodyParser.urlencoded({ extended: true }))
    // app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        limit: "50mb",
        extended: false,
        parameterLimit: 50000
      })
    );

    // app.use(cookieParser());
    // app.use(methodOverride());

    // logging middlewares
    app.use(morgan("combined", { stream: logger.stream }));
    app.use((req, res, next) => {
      next();
    });
    
    app.use("/api/v1/auth/welcome", (req, res) => {
      res.status(200).send({
        message: `Welcome to the ${appConfig.appName}, running on port ${appConfig.appPort}!`,
        success: true
      });
    });

    return app;
  }
}

module.exports = MiddlewaresLoader;
