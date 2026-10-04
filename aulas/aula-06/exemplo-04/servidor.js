import express from "express";
import moment from "moment";

const app = express();

app.get("/", (req, res) => {
    const agora = moment();         // obtenção da data e hora corrente

    const horaDia = agora.hour();   // obtenção de hora do dia (número entre 0 e 23)

    // definição de saudação
    let saudacao;
    if (horaDia < 12)      { saudacao = 'Bom Dia'; }
    else if (horaDia < 18) { saudacao = 'Boa Tarde'; }
    else                   { saudacao = 'Boa Noite'; }

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Alô, ${saudacao}, Mundo!`);
});

app.get("/english", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end("Hello, World!");
});

app.listen(3000, () => {
    console.log("Servidor express iniciado!");
});