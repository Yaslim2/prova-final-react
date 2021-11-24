describe("Account Tests", () => {
  beforeEach(() => {
    cy.createAnUser();
    cy.logInAnUser();
  });

  it.skip("Must be able to enter on the account page", () => {
    cy.enterAccountPage();
  });

  it.skip("Must be able to edit the credentials of the account", () => {
    cy.enterAccountPage();
    cy.changeAccountData();
  });


  it("Must be able to login after change the credentials", () => {
    cy.enterAccountPage();
    cy.changeAccountData();
    cy.logOutAnUser();
    cy.logInAnUser(Cypress.env("newEmail"), Cypress.env("newPassword"));
  });
});
