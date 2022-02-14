const mongoose=require('mongoose')
const validator=require('validator');
//mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    // useNewUrlParser:true,
    // useCreateIndex:true
//})
 const User = mongoose.model('User',{
     name:{
         type:String,
         required:true,
         trim:true
     },
     email:{
         type:String,
         required:true,
         trim:true,
         validate(value){
             if(!validator.isEmail(value)){
                 throw new Error('email is invalid')
             }
         }

     },
     age: {
         type : Number,
         default : 10,
         validate(value){
             if(value<0){
             throw new Error('age must be positive number')
         }
         }
     },
     password:{
         type:String,
         required:true,
         trim:true,
         minlength:7,
         validate(value){
              if(value.toLowerCase().includes('password')){
                 throw new Error('password cant be set as password')
             }
         }
     }
 })
// const me = new User({
//      name:'    dp',
//      age:16,
//      email:'avxyz@gmail.com    ',
//      password:'dj    fkdjflk'
//  })
//  me.save().then(()=>{
//      console.log(me);
//  }).catch((error)=>{
//      console.log('error',error);
//  })
 module.exports=User;