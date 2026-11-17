import express from "express";
import path from "path";
import { getSerieFibonacci } from "./util.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.post("/fib", (req, res) => {
    const qtd = req.body.qtd;

    const termos = getSerieFibonacci(qtd);

    res.render("serie-fib", {
        termos: termos
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
})