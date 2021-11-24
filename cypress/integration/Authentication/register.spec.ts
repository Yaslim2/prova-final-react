describe("Registration Tests", () => {
  it.skip("Must create an valid user", () => {
    cy.createAnUser();
  });

  it.skip("Must not be able to create an user without fill in the form data", () => {
    cy.createAnUserWithoutData();
  });

  it.skip("Must not be able to create an user with an invalid email", () => {
    cy.createAnUserWithInvalidEmail();
  });

  it("Must not be able to create an user with an invalid password", () => {
    cy.createAnUserWithInvalidPassword();
  });
});
