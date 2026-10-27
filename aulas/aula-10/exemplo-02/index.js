import express from "express";
import moment from "moment";
import path from "path";
import { getSequenciaNumerosRandomicos, getMarcacaoPaginaNumeros } from "./util.js";

const app = express();

app.use((req, res, next) => {
    const m = moment();
    console.log(`${m.format("DD/MM/yyyy")} ${m.format("HH:mm")}: requisição de recurso [${req.url}], via método ${req.method}, de ${req.ip}`);
    next();
});

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/numeros", (req, res) => {
    const min = req.query.min;
    const max = req.query.max;
    const qtd = req.query.qtd;

    const numeros = getSequenciaNumerosRandomicos(min, max, qtd);

    const resposta = getMarcacaoPaginaNumeros(numeros);

    res.setHeader("Content-Type", "text/html; charset=utf-8")

    res.end(resposta);
});

app.listen(3000, () => {
    console.log(`Servidor iniciado!`);
});