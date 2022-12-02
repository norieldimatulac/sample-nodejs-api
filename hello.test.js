const request = require('supertest');
const makeApp = require('./app.js');
const makeHelloRoutes = require('./routes/hello');

const app = makeApp();

const helloRoutes = makeHelloRoutes();

app.use('/hello', helloRoutes);

describe('GET /', () => {

    it('returns welcome page', async () => {

        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Welcome to sample-nodejs API service!");

    });

    it('returns 404', async () => {
        const res = await request(app).post('/asdfasdf/hello/world').send({ });
        expect(res.statusCode).toEqual(404);
    });

});

describe('GET /:num1/:num2', () => {

    it('returns sum of 2 numbers', async () => {
        const res = await request(app).get('/hello/1/2').send();
        expect(res.statusCode).toEqual(200);
        expect(res.body.sum).toEqual(3);
    });

});
