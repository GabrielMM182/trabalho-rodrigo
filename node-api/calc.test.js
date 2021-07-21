const calculator = require('./src/Calculator/calc');

test('calcular soma ok' , () => {
    expect(calculator.sum(2, 2).toBe(4));
});