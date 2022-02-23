const request = require('supertest')
//const jwt = require('jsonwebtoken')
//const mongoose = require('mongoose')
//const { request } = require('../src/app')
const User = require('../src/models/user')
const app = require('../src/app')
const { userOneId,userOne,setupDatabase } = require('./fixtures/db')



beforeEach(setupDatabase)

test('should signup a new user', async () => {
    const response=await request(app).post('/users').send({
        name:'vasav',
        email:'dangivasav@gmail.com',
        password:'asdf1234'
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        user:{
            name:'vasav',
            email:'dangivasav@gmail.com'
        },
        token:user.tokens[0].token
    })
    expect(user.password).not.toBe('asdf1234')
})


test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)

})

test('should not login non existent',async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'thisisnotmypas'
    }).expect(400)
})

test('should get profile for user',async () =>{
    await request(app)
    .get('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})
test('should not get profile for unauthenticated', async() => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})
test('should delete authenticated user',async() => {
    await request(app)
    .delete('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()

})

test('should not delete authenticated user',async() => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})


test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatars')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async() => {
    await request(app)
        .patch('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send({
            name:'jess'
        })
        .expect(200)
        const user = await User.findById(userOneId)
        expect(user.name).toEqual('jess')
})

test('should not update invalid user field',async() =>{
    await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        location: 'Philadelphia'
    })
    .expect(400)
    
})