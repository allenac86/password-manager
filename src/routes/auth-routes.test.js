const authRoutes = require('./auth-routes');

describe('auth-routes', () => {
  // write tests to ensure that /signup route has POST method
  it('should have a /signup route with POST method', () => {
    expect(authRoutes.stack[0].route.path).toEqual('/signup');
    expect(authRoutes.stack[0].route.methods.post).toBeTruthy();
  });
  // write tests to ensure that /login route has POST method
  it('should have a /login route with POST method', () => {
    expect(authRoutes.stack[1].route.path).toEqual('/login');
    expect(authRoutes.stack[1].route.methods.post).toBeTruthy();
  });
  // write tests to ensure that /logout route has DELETE method
  it('should have a /logout route with DELETE method', () => {
    expect(authRoutes.stack[2].route.path).toEqual('/logout');
    expect(authRoutes.stack[2].route.methods.delete).toBeTruthy();
  });
  // write tests to ensure that /refreshToken route has POST method
  it('should have a /refreshToken route with POST method', () => {
    expect(authRoutes.stack[3].route.path).toEqual('/refreshToken');
    expect(authRoutes.stack[3].route.methods.post).toBeTruthy();
  });
});