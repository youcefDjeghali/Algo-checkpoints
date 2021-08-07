const counting = (sentence) => {
    // caracters counts
    let caracters = sentence.length

    // words counts
    let  words = sentence.split(" ").length
    
    // vowels counts
    //method 1
    let vowelsCount = sentence.match(/[aeiou]/gi).length

    //method 2
    // let vowelsCount = 0
    // let vowels = ["a", "e", "o", "u", "i"]
    // let sentenceTab = sentence.split("")

    // sentenceTab.map(caracter => {
    //     if(vowels.includes(caracter)) vowelsCount ++
    // })
    return {
        caracters,
        words,
        vowelsCount
    }
}
console.log(counting("hello from here"))