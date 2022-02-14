require('../src/db/mongoose')
const { findByIdAndDelete } = require('../src/models/task')
const Task = require('../src/models/task')
// Task.findByIdAndDelete('62065146f77481b090606604').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed: false})    
//  }).then((result)=>{
//      console.log((result));
//  }).catch((e)=>{
//      console.log(e);
//  })
const deleteTaskandCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)

    const count =await Task.countDocuments({completed:false})
    return count
}
deleteTaskandCount('6205fef67a7596c7a20764ce',true).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})