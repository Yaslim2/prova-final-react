// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createAnUser", () => {
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
