class AppError extends Error {
  constructor(name, message, explanation, statusCode) {
    super();
    (this.message = message),
      (this.explanation = explanation),
      (this.statusCode = statusCode),
      (this.name = "AppError");
  }
}

module.exports = AppError;
