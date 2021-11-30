// Utils module loaded
const util = require('util');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 404;
  }
}
// inherit from Error
util.inherits(NotFoundError, Error);

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 400;
  }
}
// inherit from Error
util.inherits(BadRequestError, Error);

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 404;
  }
}
// inherit from Error
util.inherits(UnauthorizedError, Error);

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 403;
  }
}
// inherit from Error
util.inherits(ForbiddenError, Error);

class PayLoadTooLargeError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 413;
  }
}
// inherit from Error
util.inherits(PayLoadTooLargeError, Error);

class UnsupportedMediaTypeError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 415;
  }
}
// inherit from Error
util.inherits(UnsupportedMediaTypeError, Error);

class UnProcessableEntityError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 422;
  }
}
// inherit from Error
util.inherits(UnProcessableEntityError, Error);

class ServerError extends Error {
  constructor(message) {
    super(message);
    // super constructor
    Error.call(this);
    // super helper method to include stack trace in error object
    Error.captureStackTrace(this, this.constructor);
    // set our function’s name as error name.
    this.name = this.constructor.name;
    // set the error code
    this.status = 500;
  }
}
// inherit from Error
util.inherits(ServerError, Error);

// Export the constructor function as the export of this module file.
module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  PayLoadTooLargeError,
  UnsupportedMediaTypeError,
  UnProcessableEntityError,
  ServerError,
};
