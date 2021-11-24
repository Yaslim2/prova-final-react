describe("Login Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
  });

  it.skip("Must authenticate an existing user", () => {
    cy.logInAnUser();
  });

  it("Must not authenticate a non-existing user", () => {
    cy.logInAnInvalidUser();
  });
});
