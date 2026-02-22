// Welcome guestName, your room number is roomNumber!
const guestName = "Mango";
const roomNumber = 207;
const greeting = "Welcome" + " " + guestName + ", your room number is" + roomNumber;
const greeting2 =`Welcome &{guestName}, your room number is &{roomNumber}!`;
// console.log(greeting);
// console.log(greeting2);




 const productName = `apple`;
  const productPrise = 2;
    // const massegeOne ='You picked' + productName + ',' +  'price per item is' + productPrise + 'credits'
    // console.log(massegeOne)


const massegeTwo =`You picked ${productName}, price per item is ${productPrise} credits`;
    // console.log(massegeTwo.length)


const lastIndex = massegeTwo.length - 1;
const lastSymbol =  massegeTwo[lastIndex];
console.log(lastSymbol)
console.log(massegeTwo[2])


const modMassage = massegeTwo.toUpperCase()
// console.log(modMassage)

const modMassage2 = massegeTwo.toLowerCase()
console.log(modMassage2)



const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase()
console.log(normalizedToUpperCaseInput === BRAND_NAME)


// console.log(modMassage.indexOf("price"));
// console.log(massegeTwo.indexOf("two"));
// console.log(massegeTwo.includes("spam"));
// console.log(massegeTwo.includes("item"));

const fileName = "styles.css";
console.log(fileName.endsWith('.js'));


const number = 64;
const hours = Math.floor(number / 60)
const minues = number % 60
const modHours = String(hours).padstart()
const modMinutes = String(minutes).padstart(2, 0)
console.log(modHours);
console.log(hours);
console.log(minues);
console.log(`${modHours}: ${modMinutes}`);

