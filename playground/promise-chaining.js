require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('620606c4288e2646427f8774',{age:20}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const updateAgeandCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}
updateAgeandCount('6205fbb55b370b69db9aed1e',29).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})