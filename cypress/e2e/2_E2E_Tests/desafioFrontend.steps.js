// Primeiro referencio o Cucumber para Cypress
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// Depois importo/referencio a classe de page objects
import BrowserWindowsPage from "./desafioFrontend.pages.js";

// Aqui crio uma nova variável chamada "page" para utilizar os métodos criados na classe de Page Objects
const page = new BrowserWindowsPage();


Given('que acesso o site DemoQA', () => {
  page.visit();
});

When('seleciono a opção {string}', (menu) => {
  page.selectMainMenu(menu);
});

When('clico no submenu {string}', (submenu) => {
  page.selectSubMenu(submenu);
});

When('clico no botão {string}', (button) => {
  page.clickNewWindow(button);
});

Then('uma nova janela deve ser aberta', () => {
  page.validateNewWindow();
});

Then('devo visualizar a mensagem {string}', (message) => {
  page.validateMessage(message);
});

Then('fecho a nova janela', () => {
  page.closeNewWindow();
});