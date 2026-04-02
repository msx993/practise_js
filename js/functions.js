// const hiFn = function () {
//    return "hello"
// }
// const result = hiFn()
// console.log(result);

// const showName = function (name) {
//    console.log(`Hello, ${name}`);
// }
// showName("Max")

// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів. 
//  Перевірте її роботу.

const mul = function (n, m) {
    const sum = n + m
    const multiplay = n * m
    const diference = n - m
    return (sum, multiplay, diference)
}
const result = mul()
console.log(result);

