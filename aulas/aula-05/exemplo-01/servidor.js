import { createServer } from 'node:http';

function tratarRequisicao(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Alo, Mundo!');
}

function iniciarServidor() {
    console.log('Servidor iniciado!');
}

const servidor = createServer(tratarRequisicao);

servidor.listen(3000, iniciarServidor);