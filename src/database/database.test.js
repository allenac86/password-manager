const db = require('./database');
const mongoose = require('mongoose');
require('dotenv').config();

// test that the database is connected
describe('database tests', () => {
  test('should connect to the database', async () => { 
    const db_connection = await db(process.env.MONGO_URI);
    expect(db_connection).toBeDefined();
    mongoose.connection.close();
  });
}); // end describe('database tests')