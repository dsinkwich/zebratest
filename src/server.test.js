var request = require('supertest');

describe('server', () => {
    let server;

    beforeEach(function () {
      server = require('./server');
    });

    afterEach(function () {
        server.close();
    });

    it('responds to / with HTTP 200', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
})
