// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient

const {MongoClient,ObjectId}=require('mongodb');

const connectionUrl='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(connectionUrl,{ useNewUrlParser:true},(error,client)=>{
    if (error){
        return console.log('unable to connect database');
    }
    //console.log('connected correctly');
    const db = client.db(databaseName);
    
    // db.collection('users').findOne({_id:ObjectId("6204acdd0fd8445446904b2a")},(error,user)=>{
    //     if(error){
    //         return console.log('can not fetch some problem');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({name:"vasav"}).toArray((error,user)=>{
    //         console.log(user);
    // })
    // db.collection('tasks').findOne({_id:ObjectId("6204b417d4da5fd8305cb85a")},(error,task)=>{
    //     if(error){
    //         console.log('not getting');
    //     }
    //     console.log(task);
    // })
    // db.collection('tasks').find({completed:false}).toArray((error,task)=>{
    //     if(error){
    //         return console.log('not getting that tasks of find');
    //     }
    //     console.log(task);
    // })
    // const updatePromise=db.collection('users').updateOne({
    //     _id:ObjectId("6204a931c30cdac78cad46a6")
    // },{
    //     $set: {
    //         name:'aman'
    //     },
    //     $inc:{
    //         age:1
    //     }
    // })
    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    // db.collection('tasks').updateMany({
    //     completed:false    
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount);
    // }).catch((error)=>{
    //     console.log();
    // })
    // db.collection('users').deleteMany({
    //     name:"vasav"
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    // db.collection('tasks').deleteOne({
    //     description:'task2'
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
})
