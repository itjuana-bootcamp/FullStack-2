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

Cypress.Commands.add("createNewProduct", (product) => {
  cy.contains("button", "Add a new product").click();
  cy.contains("Add a new product...");

  cy.get("input[name=name]").type(product.name);
  cy.get("input[name=description]").type(product.description);
  cy.get("input[name=price]").clear().type(product.price);
  cy.get("input[name=imageUrl]").type(product.imageUrl, { delay: 0 });

  cy.contains("button", "Add product").click();

  cy.contains(product.name);
  cy.contains(product.description);
  cy.contains(`$${product.price}`);
  cy.get("img").should("have.attr", "src", product.imageUrl);
});

Cypress.Commands.add("visitAdminPage", () => {
  cy.visit("/");

  cy.contains("Admin").click();
  cy.url().should("contain", "/admin");
});
