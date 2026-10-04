import { createServer } from 'node:http';
import moment from 'moment';

const servidor = createServer((req, res) => {
    const agora = moment();
    console.log(`Requisição recebida no dia ${agora.format('DD/MM/YYYY')}, às ${agora.format('HH:mm:ss')}`);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Alô, Mundo!');
});

servidor.listen(3000, () => {
    console.log('Servidor iniciado!');
});