import express from "express";
import { getRandomInt } from "./util.js";

const app = express();

app.use(express.static(`${import.meta.dirname}/static`));

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] -> Requisição recebida de ${req.ip}: ${req.method} ${req.url}`);
    next();
});

app.post("/aleatorios", (req, res) => {
    const MIN = 1;
    const MAX = 100;

    const n = parseInt(req.body.n);
    const numerosAleatorios = [];

    for (let i = 0; i < n; i++) {
        numerosAleatorios.push(getRandomInt(MIN, MAX));
    }

    res.json(numerosAleatorios);
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
    console.log(`Diretório do servidor: ${import.meta.dirname}`);
});