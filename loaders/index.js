const middlewaresLoader = require("./middlewares.loader");
const logger = require("../helpers/logger.helper");
const routesLoader = require("./routes.loader");
/**
 * @description Loads appliation middleware
 */
class Loaders {
  /**
   * @static
   * @description Initialize application essential middlewares.
   * @param {Object} app contains express app and express object
   * @memberOf Loaders
   * @return
   */
  static init(app) {
    try {
      // loading middleware
      middlewaresLoader.init(app);
      routesLoader.init(app);
    } catch (err) {
      console.log(err);
      logger.error("Error occurs while boostraping application loaders");
      logger.error(err);
      new Error(err);
    }
  }
}

module.exports = Loaders;
