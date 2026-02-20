class navegaPagina {
  
    elements = {
      alertsMenu: () => cy.contains("Alerts, Frame & Windows"),
      browserWindowsMenu: () => cy.contains("Browser Windows"),
      newWindowBtn: () => cy.get("#windowButton"),
      pageMessage: () => cy.get("h1")
    };
  
    acessarMenuAlerts() {
      this.elements.alertsMenu().click();
    }
  
    acessarBrowserWindows() {
      this.elements.browserWindowsMenu().click();
    }
  
    clicarEmNovaJanela() {
      this.elements.newWindowBtn().click();
    }
  
    validarMensagemNovaPagina(texto) {
      this.elements.pageMessage().should("have.text", texto);
    }
  
  }
  
  export default new navegaPagina();