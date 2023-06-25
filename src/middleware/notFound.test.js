const notFound = require('./notFound');

describe('notFound', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  it('should set the response status code to 404 and send a "Route does not exist" message', () => {
    notFound(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Route does not exist');
  });
});