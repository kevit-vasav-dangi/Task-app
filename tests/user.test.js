const request = require('supertest')
//const { request } = require('../src/app')
const app = require('../src/app')

test('should signup a new user', async () => {
    await request(app).post('/users').send({
        name:'vasav',
        email:'dangivasav@gmail.com',
        password:'asdf1234'
    }).expect(201)
})