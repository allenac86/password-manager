const getDateNow = require('./date');

describe('getDateNow', () => {
  it('should return the current date in the format "MM/DD/YYYY"', () => {
    const mockDate = new Date('2023-06-26T12:00:00Z');
    const originalDate = global.Date;
    global.Date = jest.fn(() => mockDate);
    global.Date.UTC = originalDate.UTC;
    global.Date.parse = originalDate.parse;
    global.Date.now = originalDate.now;

    const result = getDateNow();

    expect(result).toBe('6/26/2023');
    // reset the global Date object
    global.Date = originalDate;
  });
});