const mongoose=require('mongoose')
const validator=require('validator');
//  mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
// //     // useNewUrlParser:true,
// //     // useCreateIndex:true
//  })

const Task = mongoose.model('Tasks',{
    description : {
        type : String,
        trim:true,
        required:true
    },
    completed : {
        type : Boolean,
        default:false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref:'User'
    }
})
// const newTask= new Task({
//     description:'task4',
//     //completed:22
// })
// newTask.save().then((newTask)=>{
//     console.log(newTask);
// }).catch((e)=>{
//     console.log('error',e);
// })
module.exports=Task;