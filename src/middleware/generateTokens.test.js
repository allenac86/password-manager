require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Token } = require('../models/Model');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('./generateTokens')

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

jest.mock('../models/Model', () => ({
  Token: {
    create: jest.fn(),
  },
}));

describe('generateToken', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate an access token using the provided user', () => {
    const user = { id: 1, name: 'John Doe' };
    const accessToken = 'mocked-access-token';

    jwt.sign.mockReturnValue(accessToken);

    const result = generateAccessToken(user);

    expect(jwt.sign).toHaveBeenCalledWith(
      user,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '20m' }
    );
    expect(result).toBe(accessToken);
  });

  it('should generate a refresh token, save it in the Token model, and return the saved token', async () => {
    const user = { id: 1, name: 'John Doe' };
    const refreshToken = 'mocked-refresh-token';
    const savedToken = { token: refreshToken };

    jwt.sign.mockReturnValue(refreshToken);
    Token.create.mockResolvedValue(savedToken);

    const result = await generateRefreshToken(user);

    expect(jwt.sign).toHaveBeenCalledWith(
      user,
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '60m' }
    );
    expect(Token.create).toHaveBeenCalledWith({ token: refreshToken });
    expect(result).toBe(savedToken);
  });
});