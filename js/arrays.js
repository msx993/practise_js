// const numbers = [0, 1, 2, 3, 4]
// // console.log(numbers.length);
// // console.log(numbers.length-1);
// // // console.log(numbers[numbers.length-1]);
// // // console.log(numbers[0]);



// const fruits = ["apple", "banana", "pear", "peach"];
// // console.log(fruits.length);
// // console.log(fruits[fruits.length-1]);
// // console.log(fruits[0]);

// fruits[2] = 'mango'

// for(let i = 0; i < fruits.length; i += 1){
// console.log(fruits[i]);

// }




// const array = ["Mango", "hurries", "to", "the", "train"];
// console.log(array.join(" "));
// console.log(array.indexOf("to"));
// console.log(array.includes("banana"));


// 2
// є рядок, що склад зі слів, розділених лише пробілами <message> 
// та  число, що містить ціну <pricePerWord >
// напиши код, що рахує загальну вартість гравірування слів в рядку

// "JavaScript is in my blood", 10 повертає 50
// "Web-development is creative work", 20 повертає 80


// const text = "JavaScript is in my blood";
// const pricePerWord = 10;


// const messageArray = text.split(" ");



// const price = messageArray.length * pricePerWord;
// console.log(price);




// 3
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код , щоб перевіряти, чи присутній такий товар в масиві storage
// і повертати:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру

// ["apple", "plum", "pear"], "plum" повертає "plum is available to order!"
// ["apple", "plum", "pear"], "pEAr" повертає "pear is available to order!"
// ["apple", "plum", "pear"], "orange" повертає "Sorry! We are out of stock!"

// const storage = ["apple", "plum", "pear"];
// const item = "plum";
// const convertedItem = item.toLowerCase;
// if (storage.includes("plum")) {
//     console.log("is available to order!");
// } else {
//     console.log("Sorry! We are out of stock!");
    
// }
// storage.push("banana")

// // const isIncluded = ;
// let answer;



// 3
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код так, 
// щоб виконувати пошук значення value у масиві array 
// і повертати:

//  - порожній масив, якщо в array немає елемента зі значенням value
//  - підмасив, що починається з початку array 
//    і до елемента зі значенням value включно, якщо такий елемент є в array

// ["Mango", "Poly", "Ajax"], "Poly" повертає ["Mango", "Poly"]
// ["Mango", "Poly", "Ajax"], "Jacob" повертає []


// const array = ["Mango", "Poly", "Ajax"];
// const value = "Poly";
// let arr = [];

// const elemIndex = array.indexOf(value);
// if (elemIndex !== -1) {
//   arr = array.slice(0, elemIndex + 1);
// }

// console.log(arr);

// console.log(elemIndex);

// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(1,2 'swift', 'go')
// console.log(languages);

// const colors = ["red", "green", "blue"];
// colors.splice(2,0,'yellow')
// console.log(colors);

// const colors2 = ["red", "green", "blue"];
// colors2.splice(2,1, 'purple')
// console.log(colors2);



// Додайте 'Рок-н-ролл' в кінець масиву. 
// Замініть значення в середині масиву на 'Класика'. 
// Видаліть перший елемент масиву і покажіть його. 
// Додайте 'Реп' і 'Реггі' на початок масиву. 
// Виведіть масив в консоль.
const styles = ['Джаз', 'Блюз'];
styles.splice(1,0, 'Рок-н-ролл')
styles.splice(0,0, 'Класика')
styles.splice(-1,1)
styles.splice(0,0, 'Реп')
styles.splice(0,0, 'Реггі')
console.log(styles);
