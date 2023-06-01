describe("Cambio", () => {
  it("Muestra el cambio a devolver al cliente", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(10);
    cy.get("#monto-efectivo").type(50);
    cy.get("#cambio-button").click();
    cy.get("#resultado-div").should("contain", "40");
  });
});
