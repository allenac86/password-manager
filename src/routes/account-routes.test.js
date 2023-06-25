const accountRoutes = require('./account-routes');

describe('account-routes', () => {
  it('should have a /all route with GET and POST methods', () => {
    expect(accountRoutes.stack[0].route.path).toEqual('/all');
    expect(accountRoutes.stack[0].route.methods.get).toBeTruthy();
    expect(accountRoutes.stack[0].route.methods.post).toBeTruthy();
  });
  
  it('should have a /:id route with GET, PATCH, and DELETE methods', () => {
    expect(accountRoutes.stack[1].route.path).toEqual('/:id');
    expect(accountRoutes.stack[1].route.methods.get).toBeTruthy();
    expect(accountRoutes.stack[1].route.methods.patch).toBeTruthy();
    expect(accountRoutes.stack[1].route.methods.delete).toBeTruthy();
  });
});