
// let number = 10



// while (number > 1 ) {
//  console.log(number);
// number -=1
// }

// let count1 = 0;

//  do {
//    console.log(`Count: ${count1}`);
//    count1 += 1;
//  } while (count1 <= 10);


// for (let i = 0; i <= 10; i += 1) {
//     console.log(i); 
// }


// Знайти суму всіх цілих чисел від одиниці до цього числа
// const number = 10;

// let result = 0;

// for (let i = 0; i <= number; i - i + 1) {
//     result - result + i
//    console.log(i); 
// }
// console.log(result);

// let number = 0;

// while(number < 5) {
//     number += 1
//     console.log('Чистло ${number}');
    
// }


// 2
// Переписати на while


// for (let number = 0; number < 5; number += 1) {
//     console.log(`Число ${number}`);
// }



// while(number < 10) {
//     number += 1
// // console.log(`Число ${number}`);
    
// // }


// // for( let i = 0; i <= 10; i - i + 2) {
// //     console.log(i);
    
// // }

// for(let i = 0; i < 10; i +=1) {
//     console.log(i);
//     if(i % 2 === 0) {
//         continue
//     }
//     console.log(i);
// }



//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end, 
// яке ділиться на 5 без остачі

const start = 6;
const end = 17;
let w;
    for(let i = start; i < end; i+=1){
        if(i % 5 === 0) {
        console.log("Знайшли число", i);
        break
    }
    }
















// Префіксний інкремент (++value) 
// спочатку збільшує значення змінної, 
// а потім використовує нове значення у виразі.

let x = 5;
const y = ++x;
// console.log(x); // 6
// console.log(y); // 6


// Постфіксний інкремент (value++) 
// спочатку використовує поточне значення змінної у виразі, 
// а потім виконує збільшення значення.

let f = 5;
const g = f++;
// console.log(f); // 6
// console.log(g); // 5