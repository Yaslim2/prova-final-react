// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      createAnUser: () => void;
      logInAnUser: (email?: string, password?: string) => void;
      logOutAnUser: () => void;
      changeAccountData: () => void;
      checkEmail: (email: string) => void;
      checkPassword: (password: string) => void;
      checkName: (name: string) => void;
      enterNewBetPage: () => void;
      enterAccountPage: () => void;
      addMegaSenaToCart: () => void;
      addLotofacilToCart: () => void;
      addQuinaToCart: () => void;
      selectMegaSena: () => void;
      selectLotofacil: () => void;
      selectQuina: () => void;
      saveGame: () => void;
      checkCartTotal: (text: string, max: number) => void;
    }
  }
}

before(() => {
  Cypress.env("name", "yaslim soares");
  Cypress.env("email", "foo.bar@gmail.com");
  Cypress.env("password", "12345678");

  Cypress.env("newName", "Manoel");
  Cypress.env("newEmail", "manoel@manoel.com");
  Cypress.env("newPassword", "123456");

  Cypress.env("gameSelected", "Lotofácil");
});
