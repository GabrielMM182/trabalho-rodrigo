const calculator = require('./src/Calculator/calc');

test('calculadora de soma deve estar ok', () => {
    expect(calculator.sum(2, 2)).toBe(4);
});

test('calculadora de subtração deve estar ok', () => {
    expect(calculator.menos(8, 4)).toBe(4);
});

test('calculadora de divisao deve estar ok', () => {
    expect(calculator.div(16,4)).toBe(4);
});

test('calculadora de multiplicacao deve estar ok', () => {
    expect(calculator.mult(2,2)).toBe(4);
});
