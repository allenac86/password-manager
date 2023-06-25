const { CustomError, createCustomError } = require('./customError');

describe('CustomError', () => {
  it('should create a CustomError object with the provided message and statusCode', () => {
    const message = 'Test error message';
    const statusCode = 404;

    const error = new CustomError(message, statusCode);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(CustomError);
    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(statusCode);
  });
});

describe('createCustomError', () => {
  it('should create a CustomError object with the provided message and statusCode', () => {
    const message = 'Test error message';
    const statusCode = 404;

    const error = createCustomError(message, statusCode);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(CustomError);
    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(statusCode);
  });
});