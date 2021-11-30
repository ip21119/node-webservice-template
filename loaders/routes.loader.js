const logger = require("../helpers/logger.helper");
const FacebookRoutes = require("../modules/facebook/v1/facebook.route");

/**
 * @description Define all app routes
 */
class RoutesLoader {
  /**
   * @static
   * @memberof Routes
   * @description initialize app routes
   * @param {Object} app express object
   * @return
   */
  static init(app) {
    logger.info("Loading application routes");
    app.use("/api/v1/facebook", FacebookRoutes.init());
    return app;
  }
}

module.exports = RoutesLoader;
