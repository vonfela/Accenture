// Aqui estou criando os comandos customizados que irei utilizar no teste de API e também deixar esses comandos disponíveis para serem utilizados em outros testes.


// Crio um comando para criar um usuário viando um post para o endpoint na url, passando o objeto do usuário como body da requisição e usando o failOnStatusCode: false para não falhar o teste caso a resposta tenha um status code diferente de 2xx ou 3xx, pois quero validar isso no teste e não deixar o teste falhar automaticamente.
Cypress.Commands.add('criaUsuario', (user) => {
    return cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',
      body: user,
      failOnStatusCode: false
    });
  });
  
// Crio um comando para gerar o token de autenticação do usuário criado, enviando um post para o endpoint na url, passando o objeto do usuário como body da requisição e validando que a resposta tem status 200 e armazenando o token retornado em uma variável global para ser utilizado nos próximos steps.
Cypress.Commands.add('geraToken', (user) => {
  return cy.request({
    method: 'POST',
    url: 'https://demoqa.com/Account/v1/GenerateToken',
    body: user
  });
});

// Crio um comando que faz uma requisição GET para o endpoint de livros para listar os livros disponíveis na API.
Cypress.Commands.add('listaLivros', () => {
  return cy.request('GET', 'https://demoqa.com/BookStore/v1/Books');
});
  
// Crio um comando para reservar os livros para o usuário criado, enviando um post para o endpoint na url, passando o ID do usuário, o token de autenticação no header da requisição e os livros selecionados como body da requisição.
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
  
// Crio um comando para listar as dados do usuário, enviando uma requisição GET para o endpoint na url, passando o ID do usuário e o token de autenticação no header da requisição para validar que os livros foram reservados para o usuário.
Cypress.Commands.add('listaUsuario', (userId, token) => {
  return cy.request({
    method: 'GET',
    url: `https://demoqa.com/Account/v1/User/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
});