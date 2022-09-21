const sql = require('../server/rar_db.js');
const axios = require('axios');

jest.setTimeout(10000)

describe('Ratings and Reviews Widget Tests', () => {

  it('should acquire reviews from the database', async() => {
    let results = null;
    await axios.get('http:://127.0.0.1:8080/reviews/66642')
      .then((data) => {
        results = data;
      })
      .catch((error) => {
        throw error;
      })
      expect(results).not.toEqual(null);
  })

  // it('should acquire metadata from the database')

  // it('should acquire sorted reviews from the database')

  // it('should add a new review to the database')

})