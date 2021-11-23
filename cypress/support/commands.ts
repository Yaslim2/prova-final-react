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
  cy.url().should("include", "/sign-up");

  cy.checkName(Cypress.env("name"));
  cy.checkEmail(Cypress.env("email"));
  cy.checkPassword(Cypress.env("password"));

  cy.get('[placeholder="Name"]').type(Cypress.env("name"));
  cy.get('[placeholder="Email"]').type(Cypress.env("email"));
  cy.get('[type="password"]').type(Cypress.env("password"));

  cy.get(".sc-gsDKAQ").click();

  cy.url().should("eq", "http://localhost:3000/");
});

Cypress.Commands.add(
  "logInAnUser",
  (email = Cypress.env("email"), password = Cypress.env("password")) => {
    cy.url().should("eq", "http://localhost:3000/");
    cy.checkEmail(Cypress.env("email"));
    cy.checkPassword(Cypress.env("password"));
    cy.get('[type="text"]').type(email);
    cy.get('[type="password"]').type(password);

    cy.get(".sc-gsDKAQ").click();

    cy.url().should("eq", "http://localhost:3000/user/recent-games");
  }
);

Cypress.Commands.add("logOutAnUser", () => {
  cy.get(".sc-jRQBWg").should("exist");
  cy.get(".sc-jrQzAO").click();
  cy.url().should("eq", "http://localhost:3000/");
});

Cypress.Commands.add("changeAccountData", () => {
  cy.checkEmail(Cypress.env("newEmail"));
  cy.checkPassword(Cypress.env("newPassword"));

  cy.get('[placeholder="Name"]').type(Cypress.env("newName"));
  cy.get('[placeholder="Email"]').type(Cypress.env("newEmail"));
  cy.get('[type="password"]').type(Cypress.env("newPassword"));
  cy.get(".sc-gsDKAQ").click();
});

Cypress.Commands.add("enterNewBetPage", () => {
  cy.url().should("include", "/user/recent-games");
  cy.get(".sc-gsDKAQ").click();
  cy.url().should("include", "/user/new-bet");
});

Cypress.Commands.add("enterAccountPage", () => {
  cy.get(".sc-jRQBWg").should("exist");
  cy.get('[href="/user/account"]').click();
  cy.url().should("include", "/user/account");
});

Cypress.Commands.add("checkCartTotal", (text: string, max: number) => {
  const decimal = text.match(/[0-9]{0,10}[,]{1,1}[0-9]{0,4}/);
  expect(Number(decimal[0].replace(",", "."))).to.not.be.NaN;
  expect(Number(decimal[0].replace(",", "."))).to.be.at.least(max);
});

Cypress.Commands.add("checkName", (name: string) => {
  expect(name.trim()).length.greaterThan(0);
});

Cypress.Commands.add("checkEmail", (email: string) => {
  const isEmail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  expect(email.trim().length).to.be.greaterThan(0);
  expect(isEmail.test(email.trim())).to.be.true;
});

Cypress.Commands.add("checkPassword", (password: string) => {
  expect(password.trim().length).to.be.greaterThan(0);
  expect(password.trim().length).to.be.at.least(6);
});

Cypress.Commands.add("saveGame", () => {
  cy.url().should("include", "/user/new-bet");
  cy.get(".sc-iAKWXU").then((el) => {
    cy.checkCartTotal(el.text(), 30);
  });
  cy.get(".sc-efQSVx").click();
  cy.url().should("include", "/user/recent-games");
});

Cypress.Commands.add("selectMegaSena", () => {
  Cypress.env("gameSelected") === "Mega-Sena"
    ? cy.get(".kgJZcC").click()
    : cy.get(".fSNror").click();

  Cypress.env("gameSelected", "Mega-Sena");
});

Cypress.Commands.add("selectLotofacil", () => {
  Cypress.env("gameSelected") === "Lotofácil"
    ? cy.get(".cWgVnZ").click()
    : cy.get(".juMTZn").click();
  Cypress.env("gameSelected", "Lotofácil");
});

Cypress.Commands.add("selectQuina", () => {
  Cypress.env("gameSelected") === "Quina"
    ? cy.get(".hnyiVs").click()
    : cy.get(".gaPvij").click();
  Cypress.env("gameSelected", "Quina");
});

Cypress.Commands.add("addMegaSenaToCart", () => {
  cy.selectMegaSena();
  cy.get(".sc-dvQaRk > :nth-child(1)").click();
  cy.get(".jKNetN").click();
  cy.get(".sc-cidDSM").should("include.text", "Mega-Sena");
});

Cypress.Commands.add("addLotofacilToCart", () => {
  cy.selectLotofacil();
  cy.get(".sc-dvQaRk > :nth-child(1)").click();
  cy.get(".jKNetN").click();
  cy.get(".sc-cidDSM").should("include.text", "Lotofácil");
});

Cypress.Commands.add("addQuinaToCart", () => {
  cy.selectQuina();
  cy.get(".sc-dvQaRk > :nth-child(1)").click();
  cy.get(".jKNetN").click();
  cy.get(".sc-cidDSM").should("include.text", "Quina");
});
