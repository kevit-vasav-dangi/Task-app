const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task');
const userRouter = require('./routers/user')
const e = require('express');


const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{
    console.log('server is ready'+port);
})
