const { db, sequelize } = require('../loaders/db.loader');

/**
 * @description Common Helper class for those features are commonly share in whole microservices.
 */
class CommonHelper {
  /**
   * @static
   * @memberOf CommonHelper
   * @description execute postgresql query
   * @param {String} query postgresql paramterized raw query
   * @param {Object} replacements replacement object which contains parameteres and respected values
   * @param {String} action action
   * @return {Object|Array}
   */
  static async executeQuery(query, replacements, action = 'select') {
    const qResponse = await db.sequelize.query(query, {
      replacements,
    });
    return qResponse;
  }
}

module.exports = CommonHelper;
