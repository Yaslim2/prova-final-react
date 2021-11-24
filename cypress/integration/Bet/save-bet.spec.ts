describe("Save Bets Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
    cy.logInAnUser();
    cy.enterNewBetPage();
  });

  it.skip("Must not be able to save an empty game", () => {
    cy.saveAnEmptyGame();
  });

  it.skip("Must not be able to save an invalid game", () => {
    cy.addLotofacilToCart();
    cy.saveInvalidGame();
  });

  it("Must be able to do any game and save the current game successufully", () => {
    cy.addLotofacilToCart();
    cy.addLotofacilToCart();
    cy.addQuinaToCart();
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
