const mongoose=require('mongoose')
const validator=require('validator');
mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useCreateIndex:true
})


// const Task = mongoose.model('Task',{
//     description : {
//         type : String,
//         trim:true,
//         required:true
//     },
//     completed : {
//         type : Boolean,
//         default:false
//     }
// })
// const newTask= new Task({
//     description:'task4',
//     //completed:22
// })
// newTask.save().then((newTask)=>{
//     console.log(newTask);
// }).catch((e)=>{
//     console.log('error',e);
// })
// module.exports=Task;