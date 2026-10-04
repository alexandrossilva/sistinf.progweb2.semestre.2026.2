import { createServer } from 'node:http';
import moment from 'moment';

// instanciação de servidor HTTP com indicação de função callback de tratamento de requisições
const servidor = createServer((req, res) => {
    const agora = moment();         // obtenção da data e hora corrente

    // registro, em console, da data e hora da requisição recebida
    console.log(`Requisição de ${req.url} recebida no dia ${agora.format('DD/MM/YYYY')}, às ${agora.format('HH:mm:ss')}`);

    const horaDia = agora.hour();   // obtenção de hora do dia (número entre 0 e 23)

    // definição de saudação
    let saudacao = 'Bom Dia';
    if (horaDia < 18) { saudacao = 'Boa Tarde'; }
    else {              saudacao = 'Boa Noite'; }

    // escrita de cabeçalho e corpo da resposta da requisição HTTP
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Alô, ${saudacao}, Mundo!`);
});

// inicialização do servidor HTTP com escuta de requisições na porta 3000
servidor.listen(3000, () => {
    // registro, em console, de mensagem indicando que o servidor foi iniciado
    console.log('Servidor iniciado!');
});