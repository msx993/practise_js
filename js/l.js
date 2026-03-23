// // // const myFriends = ['Mango', 'Ajax', 'Poly'];

// // // for(let i = 0; i < myFriends.length; i += 1){
// // //     console.log(myFriends[0]);
    
// // // }



// // // const arrays = [10, 25, 13, 44, 15];

// // // for (const array of arrays) {

// // // }console.log(arrays);


// // // 2
// // // Порахувати загальну суму покупок в корзині за допомогою 
// // // циклів for та for…of.

// // // const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // // let total = 0;
// // // let discount = 0.1;
// // // for (const item of cart) {
// // // discount = item * 0.9;
// // // total =+ discount;
// // //  console.log(total);
// // }




// // // Написати скрипт який порахує сумму всіх парних чисел в масиві
// // // const numberArr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// // // let totalNum = 0;
// // // for (const num of numberArr) {
// // //     if  (num % 2 === 0){
// // //     console.log("Парне число", num);
// // //     totalNum += num
// // // } 
// // // }

// // // console.log(totalNum);

// l

// // const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// // const threshold = 15;

// // for (const number of numbers) {
// //     if (number < threshold){
// //    continue
// // } 
// // console.log(number);
// // }



// // // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // // припиняється і управління передається на наступну ітерацію.





const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message = `Користувач ${loginToFind} не знайдено.`;

for (const login of logins) {
if (loginToFind === login) {
     let message = `Користувач ${loginToFind} знайдено.`
    break
    
}
}
console.log(`Користувач ${loginToFind} не знайдено.`);
