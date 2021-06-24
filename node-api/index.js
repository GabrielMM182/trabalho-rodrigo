const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const router = require('./src/routes');
// test jest
const calculator = require('./src/Calculator');
const Character = require('./src/Character');

const port = process.env.PORT || 3000;

app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.get("/", (req, res) => {
  res.send("api works")
});

// test jest
app.get('/', function (req, res) {
  res.send(`teste test a soma de 2 + 2 é: ${calculator.sum(2,2)}`);
});

app.get('/', function (req, res) {
  res.send(`hello word a subtração de 8 - 4 é ${calculator.menos(8,4)}`);
});

app.get('/',function (req, res) {
  res.send(`hello word a divisao de 16 / 4 é ${calculator.div(16,4)}`);
});

app.get('/',function (req, res) {
  res.send(`hello word a divisao de 2 * 2 é ${calculator.mult(2,2)}`);
});

app.get('/', function (req, res) {
  res.send(`test da marvel ${Character.listen}`)
})

app.get('/', function (req, res) {
  res.send(`test da marvel ${Character.require(id)}`)
})

app.get('/', (req, res) => {
  res.send('github action funcionando');
});

app.listen(3000, function() {
  console.log('🚀 Servidor rodando na porta 3000');
});

app.use(express.json());
app.listen(port);
