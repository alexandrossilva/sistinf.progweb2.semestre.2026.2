import express from 'express';
import moment from 'moment';
import { getSaudacao } from './util.js';

const app = express();

app.use((req, res, next) => {
    console.log(`Requisição recebida de ${req.ip}: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    const saudacao = getSaudacao(moment().hour(), 'portugues');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(saudacao);
});

app.get('/english', (req, res) => {
    const saudacao = getSaudacao(moment().hour(), 'english');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(saudacao);
});

app.get('/espanol', (req, res) => {
    const saudacao = getSaudacao(moment().hour(), 'espanol');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(saudacao);
});

app.use((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Idioma não suportado!');
});

// inicialização do servidor HTTP com escuta de requisições na porta 3000
app.listen(3000, () => {
    // registro, em console, de mensagem indicando que o servidor foi iniciado
    console.log('Servidor iniciado!');
});