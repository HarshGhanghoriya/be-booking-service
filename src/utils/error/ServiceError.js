const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  constructor(message, explanation, statusCode = StatusCodes.BAD_REQUEST) {
    super();
    (this.message = message),
      (this.explanation = explanation),
      (this.statusCode = statusCode),
      (this.name = "ServiceError");
      
  }
}

module.exports = ServiceError;
