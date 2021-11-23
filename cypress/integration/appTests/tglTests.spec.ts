describe("Application tests", () => {
  it("must create an user", () => {
    cy.visit("localhost:3000/sign-up");

    Cypress.env("name", "yaslim soares");
    Cypress.env("email", "yaslim123@gmail.com");
    Cypress.env("password", "12345678");

    cy.get('[placeholder="Name"]').type(Cypress.env("name"));
    cy.get('[placeholder="Email"]').type(Cypress.env("email"));
    cy.get('[type="password"]').type(Cypress.env("password"));

    cy.get(".sc-gsDKAQ").click();

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("must authenticate a user", () => {
    cy.get('[type="text"]').type(Cypress.env("email"));
    cy.get('[type="password"]').type(Cypress.env("password"));

    cy.get(".sc-gsDKAQ").click();

    cy.url().should("eq", "http://localhost:3000/user/recent-games");
  });

  it("must be able to do a new-bet for mega-sena", () => {
    cy.get(".sc-gsDKAQ").click();
    cy.url().should("include", "/user/new-bet");
    cy.get(".fSNror").click();
    cy.get(".sc-dvQaRk > :nth-child(1)").click();
    cy.get(".jKNetN").click();
    cy.get(".sc-cidDSM").should("exist");
  });
});
