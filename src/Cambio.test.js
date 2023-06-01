import Fraccionar from "./Cambio.js";

describe("Fraccionar en monedas", () => {
  it("deberia fraccionar solo en monedas de 1 bs", () => {
    expect(Fraccionar(5)).toEqual([1,1,1,1,1]);
  });
});
