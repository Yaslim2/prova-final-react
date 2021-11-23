describe("Logout Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
    cy.logInAnUser();
  });

  it("Must logout from the account", () => {
    cy.get(".sc-jRQBWg").should("exist");
    cy.logOutAnUser();
  });
});
