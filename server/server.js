require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json("Funciona");
});

app.get('/usuario', (req, res) => {
  res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if(body.nombre === undefined) {
        res.status(400).json({
            mensaje: "El nombre no fue especificado"
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});