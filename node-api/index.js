const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const router = require('./src/routes');
// test jest
const calculator = require('./src/Calculator');

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

app.use(express.json());
app.listen(port);
