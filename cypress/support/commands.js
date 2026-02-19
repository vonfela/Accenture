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

Cypress.Commands.add('criaUsuario', (user) => {
    return cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',
      body: user,
      failOnStatusCode: false
    });
  });
  
  Cypress.Commands.add('geraToken', (user) => {
    return cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/GenerateToken',
      body: user
    });
  });
  
  Cypress.Commands.add('listaLivros', () => {
    return cy.request('GET', 'https://demoqa.com/BookStore/v1/Books');
  });
  
  Cypress.Commands.add('alugaLivro', (userId, token, books) => {
    return cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        userId,
        collectionOfIsbns: books
      }
    });
  });
  
  Cypress.Commands.add('listaUsuario', (userId, token) => {
    return cy.request({
      method: 'GET',
      url: `https://demoqa.com/Account/v1/User/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  });