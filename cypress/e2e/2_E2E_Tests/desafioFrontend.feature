Feature: Validar abertura de nova janela no DemoQA

  Como um usuário do sistema
  Quero abrir uma nova janela no site DemoQA
  Para validar se a página correta é exibida

  Scenario: Abrir nova janela e validar mensagem
    Given que acesso o site DemoQA
    When seleciono a opção "Alerts, Frame & Windows"
    And clico no submenu "Browser Windows"
    And clico no botão "New Window"
    Then uma nova janela deve ser aberta
    And devo visualizar a mensagem "This is a sample page"
    And fecho a nova janela