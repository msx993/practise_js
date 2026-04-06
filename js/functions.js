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

// const mul = function (n, m) {
//     const sum = n + m
//     const multiplay = n * m
//     const diference = n - m
//     return (sum, multiplay, diference)
// }
// const result = mul()
// console.log(result);




/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */

// const calculateTotalPrice = function (orderedQuantity, pricePerItem) {
// const result = orderedQuantity * pricePerItem
// return result
// }
// calculateTotalPrice(5, 100)
// console.log(calculateTotalPrice(5, 100));








/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20


// const calculateTax = function (amount, taxRate) {
//     const result = amount * taxRate
//     return result
// }
// calculateTax(1000, 0.2)
// console.log(calculateTax(1000, 0.2));




// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення 
// ${item} is available to order!
// якщо немає  "Sorry! We are out of stock!";


const checkStorge = function (array, item) {
    if (Array.includes(ClipboardItem.toLowerCase())) {
        return `${item} is available to order!`
    }
    return "Sorry! We are out of stock!"
}
checkStorage(["apple", "plum", "pear"], "pLuM")
