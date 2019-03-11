const request = require('supertest');

const server = require('./server');

describe('Server.js', () => {
  describe('GET ROUTE -> /games', () => {
    it('Should return 200', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
    });
    it('should return JSON', async () => {
      const res = await request(server).get('/games');
      expect(res.type).toBe('application/json');
    });
    it('should return games', async () => {
      const res = await request(server).get('/games');
      expect(res.body).toEqual({games: ['undertale']});
    });
  });

  describe('POST ROUTE -> /games', () => {
    it('Should return 201', async () => {
      const res = await request(server)
        .post('/games')
        .send({title: 'overwatch', genre: 'shooter', releaseYear: 1995});
      expect(res.status).toBe(201);
    });
    it('should return JSON', async () => {
      const res = await request(server)
        .post('/games')
        .send({title: 'overwatch', genre: 'shooter'});
      expect(res.type).toBe('application/json');
    });
  });
});
