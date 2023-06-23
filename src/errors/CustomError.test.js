const customError = require('./CustomError');

describe('CustomError', () => {
  test('the CustomError class extends the Error class', () => {
    const error = customError.createCustomError('Test error 1', 200);
    expect(error instanceof Error).toBe(true);
  });

  test('the correct error message is returned', () => {
    const error = customError.createCustomError('Test error', 400);
    expect(error.message).toBe('Test error');
    expect(error.statusCode).toBe(400);
  })
}); // end describe('CustomError')