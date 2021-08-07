let countWords = 0
let countVowels = 0 
let countChars = 0
function check(a){
for (i=0;i<a.length;i++){
    countChars +=1
    if(a[i]== " "){
        countWords = countWords + 1        
    }
    if (a[i]=="a" ||a[i]=="o" || a[i]=="u" || a[i]=="i" || a[i]=="y" || a[i
]=="e" ) { 
    countVowels = countVowels + 1 
    }
    if ( a[i]=="."){
        countWords += 1
    }
}
console.log("le nombre de caracters = ",countChars)
console.log("le nombre de mots = ",countWords)
console.log("le nombre de voyelles = ",countVowels)
}
let parag= ("je suis youcef, j'ai 22 ans, j'habite a batna et je suis en M1 informatique.")

let sentence = "hello here."
check(sentence)