const request = require('supertest');

const server = require('./server');

describe('Server.js', () => {
  describe('GET ROUTE -> /games', () => {
    it('Should return 200', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
    });
  });

  describe('POST ROUTE -> /games', () => {
    it('Should return 201', async () => {
      const res = await request(server)
        .post('/games')
        .send({title: 'overwatch', genre: 'shooter', releaseYear: 1995});
      expect(res.status).toBe(200);
    });
  });
});
