/**
 * @description Common response handler
 */
 const successHandler = (res, code, message, data) => {
    const objResponse = {
      success: true,
      message
    };
    if (data && typeof data !== undefined) {
      objResponse.data = data;
    }
    return res.status(code).send(objResponse);
  };
  
  const errorHandler = (res, code, message) => {
    let arrMessage;
    if(typeof message === 'string') {
      arrMessage = [{
        title: "Error",
        message: message
      }]
    } else {
      arrMessage = [message];
    }
    const objResponse = {
      success: false,
      error: arrMessage
    };
    return res.status(code).send(objResponse);
  };
  
  module.exports = { successHandler, errorHandler };
  