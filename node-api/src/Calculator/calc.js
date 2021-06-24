const calculator = {
  sum(numberLeft, numberRight) {
    return numberLeft + numberRight;
  },
  menos(numberLeft, numberRight) {
      return numberLeft - numberRight;
  },
  mult(numberLeft, numberRight) {
      return numberLeft * numberRight;
  },
  div(numberLeft, numberRight) {
      return numberLeft / numberRight;
  }
};



module.exports = calculator;
