const tip = (total, percentage = .25) => total + total*percentage

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}
const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
               return reject('it cannot contain negative number')
            }
            resolve(a+b)
        },2000)
    })
}

module.exports={
    tip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}