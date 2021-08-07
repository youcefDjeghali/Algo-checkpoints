const isLetter = str => {
    if(str.length === 1 && str.match(/[a-z]/i)){
        return true
    } 
    else return false
}
// console.log(isLetter("a"))
const isDigits = value => {
    value = parseInt(value)
    if(value >= 0 && value <= 9){
        return true
    }
    else return false
    // Or return value >= 0 && value <= 9
}
// console.log(isDigits(10))
const isSeparator = value => {
    if(value === " ") return true
    else return false
    //  Or return value === " "
}
console.log(isSeparator(" "))



const count = (sentence) =>{
    let letters = 0, digits = 0, separators = 0, specials = 0
    for(let i = 0; i < sentence.length; i++){
        if(isLetter(sentence[i])) letters ++
        else if(isDigits(sentence[i])) digits ++
        else if(isSeparator(sentence[i])) separators ++
        else specials ++
    }
    return {
        letters,
        digits,
        separators,
        specials
    }
}
console.log(count("hello I am 3 ?"))
