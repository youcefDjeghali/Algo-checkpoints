




// In a small town the population is p0 = 1000 at the beginning 
// of a year. The population regularly increases by 2 percent per
//  year and moreover 50 new inhabitants per year come to live in 
//  the town. How many years does the town need to see its population
//   greater or equal to p = 1200 inhabitants?


// 1000+1000*0.02+50=1070
// 
function nbYear(p0, percent, aug, p) {
  let year=0;
  while(//Condition==  : p0<p){
    //l'operation ==> p0=p0+(p0*percent/100)+aug
    //year++;
  }

  return year;
}

















function nbYear(p0, percent, aug, p) {
    let n=0;
    while(p0<p){
     
       p0+=p0*percent/100+aug;
       n++;
      
    }
  return n;
}

console.log(nbYear(1000,5,50,5000));
console.log(nbYear(1700,2,100,2000));
console.log(nbYear(1000,3,300,7000));

// Write a function called repeat_string which repeats 
// the given string str exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"



function repeatStr (n, s) {
    let result="";
    for(let i=0;i<n;i++){
       result = result+s;
    }
    return result;
  }
  console.log(repeatStr(6, "I"));

//   Algorithms
// Implement a method that accepts 3 integer values a, b, c. The method should 
// return true if a triangle can be built with the sides of given length and false 
// in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
// a=1,b=2,c=2



function isTriangle(a,b,c) {
    if(a > 0 && b > 0 && c > 0) {
      if(a < b + c && b < a + c && c < a + b) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
     return false;
    }
  }


  function maskify(cc) {
    
    if(cc.length>4){  
    for(let i=0;i<cc.length-4;i++){ 
      cc= cc.replace(cc[i], "#"); 
    }
      }
    return cc;
  
  }



  console.log(maskify("4556364607935616"));

//   Solution 2
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

/*---------------------------------- Exo 1 ---------------------------------

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes(), which must take in input array, containing the names of people who 
like an item. It must return the display text as shown in the examples:

likes([]) -- must be "no one likes this"
likes(["Peter"]) -- must be "Peter likes this"
likes(["Jacob", "Alex"]) -- must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) -- must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) -- must be "Alex, Jacob and 2 others like this"
/*----------------------------------  ---------------------------------*/

  const likes = (arr) => {
    if(arr.length==0)return "no one likes this";
    else if(arr.length==1)return arr[0]+" likes this";
    else if(arr.length==2)return arr[0]+" and "+arr[1]+" like this";
    else if(arr.length==3)return arr[0]+", "+arr[1]+" and "+arr[2]+" like this";
    else if(arr.length>3)return arr[0]+", "+arr[1]+ " and "+(arr.length-2)+" others like this";
  }

/*

Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

  function arrayDiff(a, b) {
    let arr = [];
   if(a.length==0){return []}else{
     a.map(s1 => {
         if(!b.includes(s1)) {arr.push(s1)}
     })
     b.map(s2 => {
         if(!a.includes(s2)) {arr.push(s2)}
     })
     return arr
     }
 }

/* 
our task is to make a function that can take any non-negative integer as 
an argument and return it with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/



 function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  function filterArray(arr){
    const array=[];
    for (let i=0;i<arr.length;i++){
      if(typeof (arr[i])=="number"){
        array.push(arr[i]);
      }
    }
    return array
  }

  console.log(filterArray([1,"a","f",34,5,"b"]));


  function countTrue(arr) {
    let cpt=0;
   
       for(let i=0;i<arr.length;i++){
        
         if(arr[i]==true){
           
           cpt++;
         }
       }
    
     return cpt;
  }

  countTrue([true, false, false, true, false])



//ES6
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  getCount("Amira")

  // ES5 

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }