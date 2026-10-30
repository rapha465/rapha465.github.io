const { somar, subtrair, multiplicar, dividir, potencia } = require('../js/matematica');

describe('Operações matemáticas', () => {
  test('deve somar dois números', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('deve subtrair dois números', () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  test('deve multiplicar dois números', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('deve dividir dois números', () => {
    expect(dividir(20, 5)).toBe(4);
  });

  test('deve calcular a potência de um número', () => {
    expect(potencia(2, 3)).toBe(8);
  });

  test('deve dividir o resultado de uma potência por um número', () => {
    expect(dividir(potencia(2, 3), 2)).toBe(4);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida');
  });
});