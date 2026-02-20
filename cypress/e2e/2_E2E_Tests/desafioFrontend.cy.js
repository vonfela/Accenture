/// <reference types="cypress" />

// Aqui faço o import dos custom commands que criei para este teste.
import navegaPagina from "../../support/pages/navegaPagina.page";

describe("Validar abertura de nova janela", () => {

  it("Abrir nova janela e validar mensagem", () => {

    // Primeiro step: Acessa o site.
    cy.visit("https://demoqa.com");

    // Segundo step: Clica no menu "Alerts, Frame & Windows".
    navegaPagina.acessarMenuAlerts();

    // Terceiro step: Clica no submenu "Browser Windows".
    navegaPagina.acessarBrowserWindows();

    // Quarto step: Aqui está a parte chata, como o Cypress não tem uma forma nativa de lidar com mais de uma janela utilizo essa forma mais conhecida de sanar este problema que é interceptando a chamada abrindo uma nova janela com o window.open.
    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url;
      });
    });

    // Quinto step: Clica no botão "New Window".
    navegaPagina.clicarEmNovaJanela();

    // Sexto step: Valida o texto exibido na nova janela.
    navegaPagina.validarMensagemNovaPagina("This is a sample page");

  });

});