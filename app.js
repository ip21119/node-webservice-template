const express = require('express');

const app = express();
const path = require('path');
const createError = require('http-errors');
const loaders = require('./loaders/index');
const logger = require('./helpers/logger.helper');

/**
 * @description Key class to loads all essentials middlewares
 */
class App {
  /**
   * @static
   * @memberOf App
   * @description Boostraping an application and loads all essentials middleware and application dependencies.
   * @return
   */
  static bootstrap() {
    try {
      // Load middlewares
      loaders.init(app);
      logger.info('Application middleware loaded');

      // app.use((req, res, next) => {
      //   logger.info(
      //     `${req.method} - ${req.originalUrl} \n ${JSON.stringify(req.headers)}`
      //   );
      //   next();
      // });

      // serve static resources
      app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

      // catch 404 and forward to error handler
      app.use((req, res, next) => {
        next(createError(404));
      });

      // error handler
      app.use((err, req, res, next) => {
        //   // set locals, only providing error in development
        //   res.locals.message = err.message;
        //   res.locals.error = req.app.get("env") === "development" ? err : {};
        //   // render the error page
        //   res.status(err.status || 500);
        //   res.render("error");
        if (err) {
          logger.error(err);
          console.log(err);
          res.status(err.status || 500).send({
            message: err.message,
            success: false
          });
        } else {
          next();
        }
      });

      return app;
    } catch (err) {
      logger.error('Error occurred while boostraping user backend');
      logger.error(err);
    }
    return false;
  }
}

module.exports = App;
