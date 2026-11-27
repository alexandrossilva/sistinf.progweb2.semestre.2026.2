import express from "express";
import path from "node:path";
import methodOverride from "method-override";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()}: requisição de recurso [${req.url}], via método ${req.method}, de ${req.ip}`);
    next();
});

app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});