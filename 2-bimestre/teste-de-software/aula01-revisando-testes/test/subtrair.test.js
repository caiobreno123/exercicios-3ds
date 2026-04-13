const subtrair = require("../src/index")

describe("Função subtrair", () => {

  test("Deve retornar 3 quando subtrair 5 por 2", () => {

    // Arrange
    const a = 5
    const b = 2

    // Act
    const resultado = subtrair(a, b)

    // Assert
    expect(resultado).toBe(3)

  })

  test("Deve retornar 5 quando subtrair 10 por 5", () => {

    // Arrange
    const a = 10
    const b = 5

    // Act
    const resultado = subtrair(a, b)

    // Assert
    expect(resultado).toBe(5)

  })

})
