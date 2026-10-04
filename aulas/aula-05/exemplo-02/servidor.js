import { createServer } from 'node:http';

const servidor = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Alo, Mundo!');
});

servidor.listen(3000, () => {
    console.log('Servidor iniciado!');
});