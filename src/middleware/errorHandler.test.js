const { CustomError } = require('../errors/customError');
const errorHandler = require('./errorHandler');

describe('errorHandler', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should handle CustomError and return the error message and status code', () => {
    const errorMessage = 'Test error message';
    const statusCode = 404;
    const error = new CustomError(errorMessage, statusCode);

    errorHandler(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(statusCode);
    expect(res.json).toHaveBeenCalledWith({ msg: errorMessage });
    expect(next).not.toHaveBeenCalled();
  });

  it('should handle non-CustomError and return a generic error message and status code 500', () => {
    const error = new Error('Test error');

    errorHandler(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      msg: 'Something went wrong, please try again',
    });
    expect(next).not.toHaveBeenCalled();
  });
});