import express from "express";
import moment from "moment";
import { getSequenciaNumerosRandomicos } from "./util.js";

const app = express();

app.use((req, res, next) => {
    const m = moment();
    console.log(`${m.format("DD/MM/yyyy HH:mm:ss")}: requisição de recurso [${req.url}], via método ${req.method}, de ${req.ip}`);
    next();
});

app.get("/numeros", (req, res) => {
    const min = req.query.min;
    const max = req.query.max;
    const qtd = req.query.qtd;

    const numeros = getSequenciaNumerosRandomicos(min, max, qtd);

    res.setHeader("Content-Type", "text/plain; charset=utf-8")

    res.end(`Números gerados: ${numeros.join(", ")}`)
});

app.listen(3000, () => {
    console.log(`Servidor iniciado!`);
});