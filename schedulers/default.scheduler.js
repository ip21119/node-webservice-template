const logger = require('../helpers/logger.helper');

/**
 * @description Default user scheduler
 */
class DefaultScheduler {
  /**
   * @static
   * @memberof DefaultScheduler
   * @description Loading default scheduler
   * @return
   */
  static init() {
    logger.info('Loading default scheduler');
  }
}

module.exports = DefaultScheduler;
