describe("Save Bets Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
    cy.logInAnUser();
    cy.enterNewBetPage();
  });

  it("Must be able to do any game and save the current game successufully", () => {
    cy.addLotofacilToCart();
    cy.addQuinaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.addMegaSenaToCart();
    cy.saveGame();
  });
});
