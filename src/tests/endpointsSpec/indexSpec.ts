import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test basic endpoints', () => {
  let originalTimeout: number;
  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('test /api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('test /api/people integration', async () => {
    const response = await request.get('/api/people');
    expect(response.status).toBe(200);
  });
  it('test /api/movies integration', async () => {
    const response = await request.get('/api/movies');
    expect(response.status).toBe(200);
  });
  it('test /api/people/name integration', async () => {
    const response = await request.get('/api/people/name?name=C-3PO');
    expect(response.body[0].name).toEqual('C-3PO');
  });
  it('test /api/movies/title integration', async () => {
    const response = await request.get(
      '/api/movies/title?movieName=Attack of the Clones'
    );
    console.log(response.body[0].title);
    expect(response.body[0].title).toEqual('Attack of the Clones');
  });
});
