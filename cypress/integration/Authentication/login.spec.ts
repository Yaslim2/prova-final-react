describe("Login Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
  });

  it("Must authenticate a user", () => {
    cy.logInAnUser();
  });
});
