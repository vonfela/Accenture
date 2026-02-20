class navegaPagina {

    // Método para acessar o site da DemoQA.
    visit() {
      cy.visit('https://demoqa.com/');
    }

    // Método quue clica no menu "Alerts, Frame & Windows".
    selecionaMenuPrincipal(menu) {
      cy.contains('h5', menu)
        .scrollIntoView()
        .click();
    }
  
    // Método que clica no submenu "Browser window".
    selecionaSubMenu(submenu) {
      cy.contains('span', submenu)
        .scrollIntoView()
        .click();
    }
  
    // Método quye clica no botão "New Window".
    clickNewWindow() {
      cy.get('#windowButton').click();
    }
  
    // Aqui é a parte mais chata pois o Cypress não tem uma forma nativa de lidar com mais de uma janela então a idéia principal é validar/checar se uma nova janela foi aberta com o window.opn
    validaNovaJanela() {
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
      cy.get('#windowButton').click();
      cy.get('@windowOpen').should('have.been.called');
    }
  
    // Aqui forço abrir na mesma aba para depois validar a mensagem na pagina.
    validaMensagem(message) {
      cy.visit('https://demoqa.com/sample');
      cy.contains(message).should('be.visible');
    }
  
    // Aqui apenas volto para a pagina principal para simular o fechamento da nova janela, ja que o Cypress não tem uma forma nativa de lidar com mais de uma janela.  
    fecharNovaJanela() {
      cy.visit('https://demoqa.com/');
    }
  
  }
  
  export default navegaPagina;