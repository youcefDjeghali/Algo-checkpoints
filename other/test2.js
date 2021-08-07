//1 Find the Smallest and Biggest Numbers
function countTrue(arr) {
    let trueCounter = 0;
  
    arr.forEach((bool) => {
      if (bool) {
        trueCounter++;
      }
    });
  
    return trueCounter;
  }
  // PEOPLE BUDGETS
  function countTrue(arr) {
    let trueCounter = 0;
  
    arr.forEach((bool) => {
      if (bool) {
        trueCounter++;
      }
    });
  
    return trueCounter;
  }
  
  // KEYS VALUE INTO ARRAY 
  function countTrue(arr) {
    let trueCounter = 0;
  
    arr.forEach((bool) => {
      if (bool) {
        trueCounter++;
      }
    });
  
    return trueCounter;
  }
  // FILTER out strings from an array
  function filterArray(arr) {
    return arr.filter(n => typeof n === 'number');
  }
  //NUMBER OF TRUE
  function countTrue(arr) {
    let trueCounter = 0;
  
    arr.forEach((bool) => {
      if (bool) {
        trueCounter++;
      }
    });
  
    return trueCounter;
  }
  
  // 2 Are the Numbers Equal?
  function equal(num1, num2){
    return num1 === num2
  }
  console.log(equal(2, 2))
  
  // 3 Absolute Sum
  function getAbsSum(tab){
      let som = 0
      for (let i = 0; i < tab.length; i++) {
        if(tab[i] < 0){
          tab[i] = tab[i] * (-1)
        }
        //Math.abs
        som = som + tab[i] // som += tab1[i]
        console.log(“i=  “, i, “tab[i]: “, tab[i], ” som = “, som)
      }
      return som
  }
  console.log(getAbsSum([2,-3,1]))
  //4 //AGEING THE POPULATION
   const persons= {
       "Ali" : 22, 
       "AMINE" : 30,
   }
        for ( person in persons){
            console.log(person)
            persons[person]=persons[person]+3
        }
  
  console.log(persons)
  
  
//   min max
  //Find the Smallest and Biggest Numbers
  
  function inRange(x, obj) {
    return x >= obj.min && x <= obj.max
  }
  console.log(inRange((10, {min:3,max:20})))
  //5 GREETINGS
  const GUEST_LIST = {
      Randy: "Germany",
      Karla: "France",
      Wendy: "Japan",
      Norman: "England",
      Sam: "Argentina"
  }
  
  function greeting(name) {
  
      switch (name) {
          case 'Randy':
          console.log("Hi! I'm Randy, and I'm from " + GUEST_LIST.Randy);
          break;
              case 'Karla':
          console.log("Hi! I'm Randy, and I'm from " + GUEST_LIST.Karla);
          break;
          case 'Wendy':
          console.log("Hi I'm " + name + " and I'm from " + GUEST_LIST.Wendy);
          break;
          case 'Norman':
          console.log("Hi I'm " + name + " and I'm from " + GUEST_LIST.Norman);
          break;
          case 'Sam':
          console.log("Hi I'm " + name + " and I'm from " + GUEST_LIST.Sam);
          break;
      default: console.log("Hi I'm a guest");
  }
  }
  greeting("Randy");