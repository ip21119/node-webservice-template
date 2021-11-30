const logger = require('../helpers/logger.helper');
// const DefaultScheduler = require('./default.scheduler');

/**
 * @description User schedulers and jobs
 */
class Scheduler {
  /**
   * @static
   * @memberof Scheduler
   * @description Initialize user schedulers and jobs
   * @return
   */
  static init() {
    logger.info('Loading application schedulers and jobs');
    // DefaultScheduler.init();
  }
}

module.exports = Scheduler;
