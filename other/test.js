




const sum = (...args) => {
    console.log("args: ", args)
    let sum = 0
    for (let arg of args) sum += arg
    return sum
  }
let x = sum(4, 9, 16, 25, 29, 100, 66, 77)
console.log(x)


// // const products = [
// //     { name: 'Milk', price: 15 },
// //     { name: 'Bread', price: 5 },
// //     { name: 'Water', price: 9 },
// //    ]

// // // ES6
// // const changeProducts = () => {
// //     return products.map(product => ({...product, newPrice: product.price + 2}))
// // }
// // // console.log(changeProducts())
// // const values = [4,7,9,2,0]
// // values.sort((a, b)=> a - b)



// // products.sort((a, b) => b.price - a.price)
// // console.log(values)
// // console.log(products)

// // //includes
// // const fruits = ["Banana", "Orange", "Apple", "Mango"]
// // const found = fruits.includes("Banana")
// // const found = fruits.find(fruit => fruit === "Banana")
// // console.log("found: ", found)
// // console.log(fruits.includes("Mango"))
// // console.log(fruits.includes("hello"))

// // const data = [5, 10, 15, 20, 25]
// // const res = data.reduce((total, currentValue) =>  total + currentValue)
// // console.log(res)// 75

// // const concatTabs = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => {
// //     return a.concat(b)
// // })
// // // concatTabs vaut [0, 1, 2, 3, 4, 5]


// const tab = [1,2, 3]
// tab = [3, 4]
// obj = {
//     a: 2,
//     b:3
// }
// console.log(tab)
// console.log(obj)
