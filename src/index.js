const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task');

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const e = require('express');


const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     // console.log(req.method,req.path);
//     // next()
//     if(req.method === 'GET'){
//         res.send('GET is not acceptable')
//     }else{
//         next()
//     }
// })
app.use((req,res,next)=>{
    if(req.method){
        res.status(503).send('site is under maintainance')
    }else{
        next()
    }
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter);

app.listen(port,()=>{
    console.log('server is ready'+port);
})
const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')
const myFunction = async ()=>{
    // const password = '1234vdas!';
    // const hashPassword = await bcrypt.hash(password,8)
    // console.log(password);
    // console.log(hashPassword);
    // const isMatch = await bcrypt.compare('1234vdas!',hashPassword)
    // console.log(isMatch);
    const token = jwt.sign({_id:'abc123'}, 'this is my new course',{expiresIn:'7 days'})

    console.log(token);
    const data =jwt.verify(token,'this is my new course')
    console.log(data);
}
myFunction()