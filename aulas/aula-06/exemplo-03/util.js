const getSaudacao = (horaDia, lang) => {
    // arrays de saudação em português
    const saudacoesPort = [
        'Bom Dia',
        'Boa Tarde',
        'Boa Noite'
    ];
   
    // arrays de saudação em inglês
    const saudacoesEng = [
        'Good Morning',
        'Good Afternoon',
        'Good Evening'
    ];

    // arrays de saudação em espanhol
    const saudacoesEsp = [
        'Buenos Días',
        'Buenas Tardes',
        'Buenas Noches'
    ];

    const traducoesOla = {
        portugues: 'Olá',
        english: 'Hello',
        espanol: 'Hola'
    };

    const traducoesMundo = {
        portugues: 'Mundo',
        english: 'World',
        espanol: 'Mundo'
    };

    // definição de array de saudação de acordo com idioma
    let saudacoes = null;

    if (lang === 'portugues')    { saudacoes = saudacoesPort; }
    else if (lang === 'english') { saudacoes = saudacoesEng;  }
    else if (lang === 'espanol') { saudacoes = saudacoesEsp;  }

    if (saudacoes == null) {
        return null;
    }
    else {
        let saudacao;

        // definição de saudação
        if (horaDia < 12)      { saudacao = saudacoes[0]; }
        else if (horaDia < 18) { saudacao = saudacoes[1]; }
        else                   { saudacao = saudacoes[2]; }

        // retorno de string
        return `${traducoesOla[lang]}, ${saudacao}, ${traducoesMundo[lang]}!`;
    }
};

export { getSaudacao };