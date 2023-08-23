require("rootpath")();
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("tiny"));
morgan(":method :url :status :res[content-length] - :response-time ms");

const configuracion = require("config.json");

const Cpersona = require ("Controlador/personaC");
const Cusuario = require ("Controlador/usuarioC");

app.use ("/api/persona", Cpersona);
app.use ("/api/usuario", Cusuario);



app.listen(configuracion.server.port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("sevidor escuchando en el puerto " + configuracion.server.port);
    }
});