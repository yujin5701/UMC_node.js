export class DuplicateUserEmailError extends Error {
    errorCode = "U001";
  
    constructor(reason, data) {
      super(reason);
      this.reason = reason;
      this.data = data;
    }
  }

  export class CustomError extends Error {
    constructor(message, statusCode = 400) {
      super(message);
      this.name = "CustomError";
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }