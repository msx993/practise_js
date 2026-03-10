// // Напиши скрипт який перевіряє можливість відкрити чат з користувачем. 
// // Для цього користувач має бути:
// // другом
// // онлайн
// // без режиму не турбувати
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// // console.log(canOpenChat);
// if (canOpenChat){
//     // console.log("You can open chat")
// }

// // Напиши скрипт перевірки підписки користувача під час доступу до контенту. 
// // Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.
// // const sub = 'free';
// // const sub = 'vip';
// // const canAccessContent = sub === 'vip' || sub === 'pro' 
// // if (canAccessContent) {
// //     console.log("You have access content")
// // } else {
// //     console.log("You haven`t access content")
// // }









// // напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// // до х1
// // після х1
// // від х1 до х2
// // до х1 або після х2
// const x1 = 10;
// const x2 = 30;
// const number = 45;
// // console.log("до x1", number < x1);
// // console.log("після х1", number > x2);
// // console.log("від х1 до х2", number > x1 > x2);
// // console.log("до х1 або після х2",  number < x1 || number > x2);


// // приклад  переписати


// // const type1 = age >= 18 ? "adult" : "child";
// const balance = 1000;
// let message;

// if (balance > 1) {
//   message = "Ваш баланс позитивний!";
// } else {
//   message = "Ваш баланс негативний!";
// }
// // console.log(message);

// const message1 = balance > 1 ? "Ваш баланс позитивний!" : "Ваш баланс негативний!"
// // console.log(message1);



// // напишіть код, що запитує:
// //  ‘Яка “офіційна” назва JavaScript?’
// //   Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, 
// //   в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
// // const userInput = "abc";
// const userInput = "EcMAScriPt";

// if (userInput.toLocaleLowerCase() === "ECMAScript".toLocaleLowerCase()){
// console.log("Правильно");

// } else {
//     console.log("Ви не знаєте? ECMAScript!");
// }


// const answer = userInput.toLocaleLowerCase() === "ECMAScript".toLocaleLowerCase() ? "Правильно" : "Ви не знаєте? ECMAScript!"
// console.log(answer);



// // Перепишіть конструкцію if, використовуючи умовний оператор '?':
// const a = 4;
// const b = 5;
// let result;
// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }
// // console.log(result)
// const  result1 = a + b < 4 ? "Нижче" : "Вище" ;
// console.log(result1)









// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// // console.log(biggerNumber);
// const biggerNumber1 = num1 > num2 ? "num1" : "num2"
// console.log(biggerNumber1);



// // Напиши скрипт обробки покупки в магазині. 
// //   - Баланс користувача зберігається в змінній balance - отримати з інпуту
// //   - Сумма покупки зберігається в змінній payment - отримати з інпуту
// //   - Перед перевіркою вивести повідомлення на екран:
// //   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість 
// //   доступних коштів на рахунку»
// //  - Якщо сума покупки не перевищує баланс:
// //      - Відняти з балансу суму покупки
// //    - Вивести повідомлення «На рахунку залишилося [число] кредитів»
// //  - Якщо сума покупки перевищує баланс:
// //     - Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
// //  - В кінці вивести повідомлення «Операція завершена»

// let balance2 = 250
// const payment = 100
// console.log('Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку');

// if (balance2 >= payment) {
// balance2 -= payment

//     console.log('на рахунку залишилось ${balance2}');
    
// } else {
// console.log('На рахунку недостатньо коштів для проведення операції!');

// }


// const browser = "Firefox";
// let text;

// if(browser == 'Edge') {
//   text = "You've got the Edge!";
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   text = 'Ми підтримуємо і ці браузери' ;
// } else {
//   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }

const browser = "Firefox";
let text;


switch (browser) {
  case 'Eage':
 text = 'Youve got the Edge!';
 break
 case 'Chrome':
  case 'Firefox':
    case 'Safari':
    case 'Opera':
      text = 'Ми підтримуємо і ці браузери'
      break
      default:
        console.log(text =  'Маємо надію, що ця сторінка виглядає добре!');
        
}
// console.log(browser, text);


let a1 = 0;
let output;

// if (a1 === 0) {
//   output = 0;
// }
// if (a1 === 1) {
//   output = 1;
// }
// if (a1 === 2 || a1 === 3) {
//   output = "2,3";
// }                                   

// switch (a1){
//   case = 0:
//     output =0;
// break
// case = 1:
//   output = 1;
// break
// case = 2:
//   case = 3:
// output = 2, 3;
// break
// }






// switch (subscription) {
//   case "premium":
//         cost = 500;
//         break
//   case "pro":
//         cost = 100;
//         break
//   case "free":
//         cost = 0; 
//         break
    
//     default:
      // console.log("Invalid subscription type");  
// }












