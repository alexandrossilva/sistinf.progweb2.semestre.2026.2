import express from "express";
import moment from "moment";
import path from "path";
import { getSequenciaNumerosRandomicos } from "./util.js";

const app = express();

app.set("view engine", "ejs");

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

    res.setHeader("Content-Type", "text/html; charset=utf-8")

    res.render("lista-numeros", {
        numeros: numeros
    });
});

app.listen(3000, () => {
    console.log(`Servidor iniciado!`);
});