// Primeiro referencio o Cucumber para Cypress
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// Depois importo/referencio a classe de page objects
import navegaPagina from "./desafioFrontend.page.js";

// Aqui crio uma nova variável chamada "page" para utilizar os métodos criados na classe de Page Objects
const page = new navegaPagina();


Given('que acesso o site DemoQA', () => {
  page.visit();
});

When('seleciono a opção {string}', (menu) => {
  page.selecionaMenuPrincipal(menu);
});

When('clico no submenu {string}', (submenu) => {
  page.selecionaSubMenu(submenu);
});

When('clico no botão {string}', (button) => {
  page.clickNewWindow(button);
});

Then('uma nova janela deve ser aberta', () => {
  page.validaNovaJanela();
});

Then('devo visualizar a mensagem {string}', (message) => {
  page.validaMensagem(message);
});

Then('fecho a nova janela', () => {
  page.fecharNovaJanela();
});