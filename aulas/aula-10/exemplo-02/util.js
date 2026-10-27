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

const getMarcacaoPaginaNumeros = (listaNumeros) => {
    let html = "";

    html += '<!DOCTYPE html>';
    html += '<html lang="pt-BR">';
    html += '<head>';
    html += '<meta charset="UTF-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<title>Lista de Números</title>';
    html += '<link rel="stylesheet" href="css/folha-estilo-lista-numeros.css">';
    html += '</head>';
    html += '<body>';
    html += '<h1>';
    html += '<img src="/img/sorteio.png" alt="Sorteio">';
    html += '<br>';
    html += 'Lista de Números';
    html += '</h1>';
    html += '<table>';

    for (let i = 0; i < listaNumeros.length; i++) {
        html += '<tr>';
        html += `<td>${listaNumeros[i]}</td>`;
        html += '</tr>';
    }

    html += '</table>';
    html += '</body>';
    html += '</html>';

    return html;
}

export { getSequenciaNumerosRandomicos, getMarcacaoPaginaNumeros };