const asyncHandler = require('./asyncHandler');

describe('asyncHandler', () => {
  it('should call the callback with req, res, and next arguments', async () => {
    const callback = jest.fn();
    const req = {};
    const res = {};
    const next = jest.fn();

    const handler = asyncHandler(callback);
    await handler(req, res, next);

    expect(callback).toHaveBeenCalledWith(req, res, next);
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next with an error if the callback throws an error', async () => {
    const callback = jest.fn().mockRejectedValue(new Error('Test error'));
    const req = {};
    const res = {};
    const next = jest.fn();

    const handler = asyncHandler(callback);
    await handler(req, res, next);

    expect(callback).toHaveBeenCalledWith(req, res, next);
    expect(next).toHaveBeenCalledWith(new Error('Test error'));
  });
});