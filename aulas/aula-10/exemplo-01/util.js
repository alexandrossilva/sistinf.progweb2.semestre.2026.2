// retorno de número pseudoaleatório considerando intervalo indicado
const getNumeroRandomico = (min, max) => {
    min = Math.ceil(min);                                   // maior inteiro inferior ao mínimo
    max = Math.floor(max);                                  // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min;   // retorno de número pseudoaleatório
}

// retorno de números pseudoaleatórios
const getSequenciaNumerosRandomicos = (min, max, qtd) => {
    let numeros = [];                                       // array de números

    // obtenção de números
    while (numeros.length < qtd) {
        let num = getNumeroRandomico(min, max);             // geração de número entre 1 e 60
        if (!numeros.includes(num)) {                       // se array não possuir número...
            numeros.push(num);                              // inserção de número no array
        }
    }
    
    numeros.sort();

    return numeros;                                         // retorno de array         
}

export { getSequenciaNumerosRandomicos };