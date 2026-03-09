const assert = require('assert');
const { multiplicar } = require('./index');

// Teste: 2 x 3 deve ser 6
assert.strictEqual(multiplicar(2, 3), 6, "2 x 3 deve ser 6");

console.log("Teste passou: 2 x 3 deve ser 6");