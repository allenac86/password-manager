const { Account, User, Token } = require('./Model');
const getDateNow = require('../utils/date');

describe('Schemas Models', () => {
  test('the account schema validation succeeds with a valid account', () => {
    const validAccount = {
      url: 'fakesite.io',
      username: 'fakeemail@email.mail',
      password: 'fakePassword123!@#$',
      createdOn: getDateNow(),
    };

    expect(Account.validate(validAccount)).toBeTruthy();
  });

  test('the account schema validation throws an error when not provided a URL', async () => {
    const invalidUrlAccount = {
      username: 'fakeemail@email.mail',
      password: 'fakePassword123!@#$',
      createdOn: getDateNow(),
    };
    const account = new Account(invalidUrlAccount);
    await expect(account.validate()).rejects.toThrow('Account validation failed: url: must provide URL');
  });

  test('the user schema validation works as expected', () => {
    const validUser = {
      email: 'fake@fakeemail.com',
      password: 'fakePassword123###',
      username: 'fakeUsername',
      createdOn: getDateNow(),
    };

    expect(User.validate(validUser)).toBeTruthy();
  });

  test('the user schema validation fails with an invalid user', async () => {
    const invalidUser = {};
    const user = new User(invalidUser);
    await expect(user.validate()).rejects.toThrow();
  });

  test('the token schema validation works as expected', () => {
    const validToken = {
      token: 'fakeToken123!@#.tokensomethingorother.jwtfaketoken12351asdf*_',
      createdOn: getDateNow(),
    };

    expect(Token.validate(validToken)).toBeTruthy();
  });

  test('the token schema validation fails with an invalid token', async () => {
    const invalidToken = {};
    const token = new Token(invalidToken);
    await expect(token.validate()).rejects.toThrow();
  });
}); // end describe('Data Schemas')