const accountRoutes = require('./account-routes');

describe('account-routes', () => {
  // write a test to check that the /all and /:id routes exist
  it('should have a /all route', () => { 
    expect(accountRoutes.stack[0].route.path).toEqual('/all');
  });
  it('should have a /:id route', () => {
    expect(accountRoutes.stack[1].route.path).toEqual('/:id');
  });
  // write tests to ensure that /all route has GET and POST methods
  it('should have a /all route with GET and POST methods', () => {
    expect(accountRoutes.stack[0].route.methods.get).toBeTruthy();
    expect(accountRoutes.stack[0].route.methods.post).toBeTruthy();
  });
  // write tests to ensure that /:id route has GET, PATCH, and DELETE methods
  it('should have a /:id route with GET, PATCH, and DELETE methods', () => {
    expect(accountRoutes.stack[1].route.methods.get).toBeTruthy();
    expect(accountRoutes.stack[1].route.methods.patch).toBeTruthy();
    expect(accountRoutes.stack[1].route.methods.delete).toBeTruthy();
  });
});