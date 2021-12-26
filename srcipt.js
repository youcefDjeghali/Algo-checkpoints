
let sentence = 'Good morning everyone'
console.log(sentence.length);
const str = sentence.split(" ");
console.log(str.length);

let vowels = 'aeiou';

    let count = 0;
    for (let index = 0; index < sentence.length; index++) {
        for (let j = 0; j < vowels.length; j++ ) {
            if (sentence[index] == vowels[j]) {
                
                count= count + 1;
            }
            
            
   
        }

}
console.log(count);

function sumArray(set1,set2) {
    for (let i = 0; i < set1.length; i++){
        for (let j = 0; j< set2.length; j++) {

           if (set1[i]===set2[j]) {
               count+=set1[i]
           }
            
        }
        
        
    }
    return count
}console.log(sumArray(set1, set2));

let set1 =[3,1,7,9] ;
let set2 =[2,4,1,9,3];

let count = 0;

function notSame(set1,set2) {
    for (let i = 0; i < set1.length; i++){
        
        if (!set2.includes(set1[i])) {
           count+=set1[i]
        }   
       }
console.log(count)

    for (let i = 0; i < set2.length; i++){
        if (!set1.includes(set2[i])) {
           count+=set2[i]
       }

}
console.log(count)
return count

}
console.log(notSame(set1, set2))


function dot_product(vector1, vector2) {
    let result = 0;
    for (let i = 0; i < 3; i++) {
      result =result+ vector1[i] * vector2[i];
    }
    return result;
  }
  console.log(dot_product([1,2,3], [4,5,6]))


