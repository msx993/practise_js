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

const storage = ["apple", "plum", "pear"];
const item = "plum";
const convertedItem = item.toLowerCase;
if (storage.includes("plum")) {
    console.log("is available to order!");
} else {
    console.log("Sorry! We are out of stock!");
    
}
storage.push("banana")

// const isIncluded = ;
let answer;


// console.log(answer);