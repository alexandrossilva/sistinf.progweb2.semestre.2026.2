const getSerieFibonacci = (qtd) => {
    let termos = [];

    let penultimo = 0;
    let ultimo    = 1;

    for (let i = 0; i < qtd; i++) {
        if (i == 0) {
            termos.push(penultimo);
        }
        else if (i == 1) {
            termos.push(ultimo);
        }
        else {
            let proximo = ultimo + penultimo;
            termos.push(proximo);
            penultimo = ultimo;
            ultimo = proximo;
        }
    }

    return termos;
}

export { getSerieFibonacci };