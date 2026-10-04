import express from "express";
import { getNumerosAleatorios } from "./util.js";

const MIN = 1;
const MAX = 100;

const app = express();

app.use(express.static(`${import.meta.dirname}/static`));

app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] -> Requisição recebida de ${req.ip}: ${req.method} ${req.url}`);
    next();
});

app.get("/aleatorios", (req, res) => {
    const n = parseInt(req.query.n);
    res.json(getNumerosAleatorios(MIN, MAX, n));
});

app.post("/aleatorios", (req, res) => {
    const n = parseInt(req.body.n);
    res.json(getNumerosAleatorios(MIN, MAX, n));
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
    console.log(`Diretório do servidor: ${import.meta.dirname}`);
});