const {tip,fahrenheitToCelsius,celsiusToFahrenheit,add}=require('../src/math')

test('calculate tip', () => {
    const total = tip(20,0.2)
    expect(total).toBe(24)
    // if(total!==24){
    //     throw new Error('something went wrong') 
    // }
})
test('tip default', () => {
    const total = tip(10)
    expect(total).toBe(12.5)
})
test('ftoc', () => {
    const temp = fahrenheitToCelsius(96.8)
    expect(temp).toBe(36)
})
test('ctof', () => {
    const temp =celsiusToFahrenheit(36)
    expect(temp).toBe(96.8)
})
// test('async test', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }
//     ,2000)
// })
// // test('failure', () => {
// //    // throw new Error('failed')
// // }) 
test('add', (done) => {
    add(3,3).then((sum) => {
        expect(sum).toBe(6)
        done()
    })
})
test('add using async',async() => {
    const sum =await add(10,10)
    expect(sum).toBe(20)
})