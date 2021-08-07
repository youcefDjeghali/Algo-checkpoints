const dotProduct = (v1, v2) => {
    return v1[0]* v2[0] + v1[1] * v2[1]
}
const orthogonalVectors = tab => {
    let orthogonals = []
    for(let i = 0; i < tab.length ; i++){
        for(let j = i + 1; j < tab.length ; j++){
            if(dotProduct(tab[i], tab[j])=== 0){
                orthogonals.push(tab[i], tab[j])
            }
        }
    } 
    return orthogonals
}
console.log(orthogonalVectors([[2, 1], [3, -1], [4, 0], [-2, 4]]))