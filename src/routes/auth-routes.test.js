const authRoutes = require('./auth-routes');

describe('auth-routes', () => {
  it('should have a /signup route with POST method', () => {
    expect(authRoutes.stack[0].route.path).toEqual('/signup');
    expect(authRoutes.stack[0].route.methods.post).toBeTruthy();
  });
  it('should have a /login route with POST method', () => {
    expect(authRoutes.stack[1].route.path).toEqual('/login');
    expect(authRoutes.stack[1].route.methods.post).toBeTruthy();
  });
  it('should have a /logout route with DELETE method', () => {
    expect(authRoutes.stack[2].route.path).toEqual('/logout');
    expect(authRoutes.stack[2].route.methods.delete).toBeTruthy();
  });
  it('should have a /refreshToken route with POST method', () => {
    expect(authRoutes.stack[3].route.path).toEqual('/refreshToken');
    expect(authRoutes.stack[3].route.methods.post).toBeTruthy();
  });
});