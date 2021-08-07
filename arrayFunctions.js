//Array functions
//.find()
//.forEach()
//.filter()
//.map()
//.reduce()

//FIND
const people = [
    { name: 'Amine', age: 15 },
    { name: 'Max', age: 5 },
    { name: 'Lilia', age: 9 },
   ]

// JavaScript   ES5
function findPerson(name) {
 for (let i = 0; i < people.length; i++) {
  
// console.log(people[i]);
// POUR CHAQUE ELEMENT DE LA TABLE : 

  let person = people[i]
  if (person.name == name) {
    return person
  }
 }
}



// ES6
const findPerson = (name) => {
 return people.find(person => person.name == name)
}
console.log(findPerson("Max"))

//Example 2 Find
const numbers = [4, 9, 16, 25, 29]
let first = numbers.find(myFunction)
function myFunction (value, index, array) {
  return value > 18
}
console.log(first);
// //or
let first = numbers.find(value => {
  return value > 18
})
// // console.log(first)

//FOREACH
const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]
// console.log(people[i].name);
// JavaScript
function showEachOne() {
 for (let i = 0; i < people.length; i++) {
   console.log(people[i].name)
 }
}
console.log(showEachOne());

// ES6
const showEachOne = ( ) => people.forEach(y => console.log(y.name))
console.log(showEachOne())

/*   FILTER  */
const products = [{name:"Milk",price:15}, {name:"Water", price:9}, {name:"Bread", price:5}]

// JavaScript
function filterProducts() {
 let cheapProducts = []
 for (let i = 0; i < products.length; i++) {
   if (products[i].price < 10) cheapProducts.push(products[i])
 }
 return cheapProducts
}

// ES6
const filterProducts = () => products.filter(product => product.price < 10)

/* MAP gives copy of array */
const products = [
    { name: 'Milk', price: 15 },
    { name: 'Water', price: 9 },
    { name: 'Bread', price: 5 },
   ]

   // JavaScript
   function changeProducts() {
    for (let i = 0; i < products.length; i++) {
      products[i].price += 2 //products[i].price = product[i].price + 2
    }
    return products
   }

   console.log(changeProducts());
   let tab=[1,2,3,4,56,78]
   
   // ES6
   const changeProducts = () =>
    products.map(product => ({ ...product, price: product.price + 2 }))
 
    console.log(changeProducts())
   console.log(products)

/* REDUCE  */

//includes
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.includes("Mango")
console.log(fruits.includes("Mango"))
// console.log(fruits.includes("hello"))