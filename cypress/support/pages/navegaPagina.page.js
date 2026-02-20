// Aqui crio a classe de Page Objects para armazenar os métodos que irei utilizar no teste de Frontend (e reutilizar em outros testes).
class navegaPagina {
  
    // Aqui estou mapeando os elementos que preciso para o teste e guardando em variáveis.
    elements = {
      alertsMenu: () => cy.contains("Alerts, Frame & Windows"),
      browserWindowsMenu: () => cy.contains("Browser Windows"),
      newWindowBtn: () => cy.get("#windowButton"),
      pageMessage: () => cy.get("h1")
    };
  
    // Crio um método para clicar no menu "Alerts, Frame & Windows".
    acessarMenuAlerts() {
      this.elements.alertsMenu().click();
    }
  
    // Crio um método para clicar no submenu "Browser Windows".
    acessarBrowserWindows() {
      this.elements.browserWindowsMenu().click();
    }
  
    // Crio um método para clicar no botão "New Window".
    clicarEmNovaJanela() {
      this.elements.newWindowBtn().click();
    }
  
    // Crio um método para validar a mensagem exibida na nova janela.
    validarMensagemNovaPagina(texto) {
      this.elements.pageMessage().should("have.text", texto);
    }
  
  }
  
  // Aqui exporto este arquivo para que ele seja importado e utilizado nos testes.
  export default new navegaPagina();