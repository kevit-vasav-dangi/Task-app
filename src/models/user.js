const mongoose=require('mongoose')
const validator=require('validator');
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
//mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    // useNewUrlParser:true,
    // useCreateIndex:true
//})
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
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
    },
    tokens:[{
        token: {
            type:String,
            required:true
        }
    }]
})
userSchema.methods.toJSON=function (){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token=jwt.sign({_id:user._id.toString()},'atlas')
    user.tokens = user.tokens.concat({token})
    console.log('tokens', user.tokens)
    await user.save()
    return token
}
userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({ email})
    if(!user){
        throw new Error('unable to login')
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('unable to login')
    }
    return user
}

userSchema.pre('save',async function (next){
    const user = this 

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    //console.log(('just before saving!'));

    next()
})
 const User = mongoose.model('User',userSchema)
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