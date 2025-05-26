const { reverseString } = require("./script.js");

describe("reverseString", () => {
  test("debería invertir la cadena correctamente", () => {
    expect(reverseString("AI4Devs")).toBe("sveD4IA");
  });

  test("debería manejar cadenas vacías", () => {
    expect(reverseString("")).toBe("");
  });

  test("debería manejar cadenas de un solo carácter", () => {
    expect(reverseString("A")).toBe("A");
  });

  test("debería invertir correctamente las cadenas con caracteres especiales", () => {
    expect(reverseString("!@#")).toBe("#@!");
  });
});
