
// const area = 60
// const rooms = 3
// const key = "location"


// const apartment = {
// descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// area,
// rooms,
// [key]: {
//     country: "Spain",
//     city: "Majorka",
// },



// changePrice(newPrise) {
// this.prise = 5034
// },


// showDescr() {
//     // console.log(this.descr);
    
// },


// showRating() {
//     return this.rating
// },

// addTag(newTag) {
// this.tags.push()
// }
// }

// apartment.changePrice(50000)
// // apartment.newTag("city centre")
// apartment.showDescr();
// apartment.owner = {};
// const owmerName = "Genry"
// // console.log(apartment);
// apartment.owner.name = "Max";
// apartment.price = 75000;
// apartment.rating = 5;
// apartment.tags.push("trusted")


// // const keys = Object.keys (apartment)
// // const values = Object.values (apartment)
// // console.log(keys);
// // console.log(values);


// apartment.ownerName = "Henry"
// apartment.ownerPhone = "892-167-1488"
// apartment.ownerEmail = "henry.carter@aptmail.com"
// apartment.tags.push("trusted")

// // 
// // 

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// // console.log(products[0].name);
    
// const getArraayOfNames = function (array) {
// const arrayOfNames = [
// ]

// for (const product of array) {
// arrayOfNames.push(product.name)
// console.log(product.name);
// }
// console.log(arrayOfNames);
// return arrayOfNames
// }

// getArraayOfNames(products)

// console.log(getArraayOfNames(products));


// constGEtQuantityOfProducts = (arr) => {
//     let total = 0
//     for (const iten of array)
//     {
        
//     }
// }


// // 1
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]



// // 2
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);


// 3
// Функція getExtremeScores(scores) 
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().
// const getExtremeScores = function (array) {
//     let best = Math.max(...array);
//     let worst = Math.min(...array);
//     console.log(best);
//     console.log(worst);                                                     
//     return {
//         best,
//         worst,
//     }
// }
// getExtremeScores([89, 64, 42, 17, 93, 51, 26]) //{ best: 93, worst: 17 }
// getExtremeScores([19, 7, 4, 17, 81, 24]) //{ best: 81, worst: 4 }









// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,  
//     antilock_brakes: true,
//     stability_control: true
//   }
// }
// const {make, model: carmodel, year, features = [], safety: {airbags, antilock_brakes, stability_control}} = car
// console.log(make, carmodel, year, features, airbags, antilock_brakes, stability_control);




// // Об’єкт movie
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }

// const {title, director: {name: directorname, nationality: directornationality}, actors, release_year, ratings} = movie
// console.log(title, director: {name: directorname, nationality: directornationality}, actors, release_year, ratings;


// Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// } 




// Об’єкт movie
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }

// const {actor[actor1, actor2]} = movie
// const[actor1, actor2] = movie.actors








// Напишіть функцію, яка отримує об'єкт 
// з ім'ям, прізвищем та віком та використовує 
// деструктуризацію для повернення рядка, 
// що містить інформацію про цю людину в такому форматі:
//  "Мене звати Ім'я Прізвище і мені Вік років".




// const personinfo = function (obj) {
  
// console.log(obj);
// const [name, lastName, age] = obj
// return `мене звати ${name}, призвіще ${lastName}, і мені ${age}`
// }


// obj({name: "Max", lastName: "iv", age: 14});










// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
const cart = {
  items: [],
  getItems() {
    return this.items
  },
  add(product) {
    this.items.push(product)
    return `${product.name}`
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
// console.log(cart.add({ name: '🍎', price: 50 }));
// console.log(cart.add({ name: '🍇', price: 70 }));
// console.log(cart.add({ name: '🍋', price: 60 }));
// console.log(cart.add({ name: '🍓', price: 110 }));