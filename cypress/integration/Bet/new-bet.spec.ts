describe("Make Bets Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
    cy.logInAnUser();
  });
  it("Must be able to enter on the new-bet page", () => {
    cy.enterNewBetPage();
  });

  it("Must be able to make random bets of any games", () => {
    cy.enterNewBetPage();
    cy.addLotofacilToCart();
    cy.addMegaSenaToCart();
    cy.addQuinaToCart();
  });
});
