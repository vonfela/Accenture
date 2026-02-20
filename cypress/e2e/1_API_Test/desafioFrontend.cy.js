/// <reference types="cypress" />
import navegaPagina from "../../support/pages/navegaPagina.page";

describe("Validar abertura de nova janela no DemoQA", () => {

  it("Abrir nova janela e validar mensagem", () => {

    // 1. Acessar o site
    cy.visit("https://demoqa.com");

    // 2. Entrar no menu Alerts, Frame & Windows
    navegaPagina.acessarMenuAlerts();

    // 3. Clicar no submenu Browser Windows
    navegaPagina.acessarBrowserWindows();

    // 4. Forçar abertura da nova janela na mesma aba
    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url;
      });
    });

    // 5. Clicar no botão New Window
    navegaPagina.clicarEmNovaJanela();

    // 6. Validar a mensagem exibida na nova página
    navegaPagina.validarMensagemNovaPagina("This is a sample page");

  });

});