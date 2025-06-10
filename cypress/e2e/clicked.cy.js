/* eslint-disable no-undef */

describe("Knappinteraktion", () => {
  it("ska visa meddelande när knappen klickas", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").click();
    cy.contains("Du klickade!").should("be.visible");
  });
});
