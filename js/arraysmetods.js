// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   }; 
// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers1, 2);
 
// Відбулася мутація вихідних Даних
// console.log(numbers1); // [2, 4, 6, 8, 10]
const numbers = [1, 2, 3, 4, 5];

const cleanMultiply = (array,value) => {
    const newArray = [];
    const result = array.forEach((item) => {
        console.log(item);
        newArray.push(item * value);
    });

    console.log(newArray, result);
}
cleanMultiply(numbers1, 2);

const cleanMultiply2 = (array,value) => {
    const result = array.map((item) => `<li>${item}</li>` );
    console.log(result);
}
cleanMultiply2(numbers1, 2);