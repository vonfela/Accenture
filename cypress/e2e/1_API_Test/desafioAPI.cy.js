/// <reference types="cypress" />


describe('Fluxo simples completo API BookStore', () => {

    // Aqui estou criando uma variável para gerar um usuário dinâmico/aleatório a cada execução.
    const user = {
      userName: `felipe_${Date.now()}`, // Utilizo o Date.now() para gerar um usuário com timestamp atual para gerar a aleatoriedade.
      password: 'Test@12345'
    };
    
    // Aqui estou criando variáveis globais para guardar os dados que serão retornados e utilizados em várias etapas do teste, como o ID do usuário, o token de autenticação e os livros selecionados.
    let userId;
    let token;
    let books;
  
    // Primeiro step criando um usuário, validando com o expect que o status é 201 e armazenando essa info na variável global que criei anteriormente.
    it('Criar usuário', () => {
      cy.criaUsuario(user).then((res) => {
        expect(res.status).to.eq(201);
        userId = res.body.userID;
      });
    });
  
    // Segundo step gerando o token de autenticação para o usuário criado, validando o status 200 e armazenando o token na variável global.
    it('Gerar token', () => {
      cy.geraToken(user).then((res) => {
        expect(res.status).to.eq(200);
        token = res.body.token;
      });
    });
  
    // Terceiro step listando os livros disponíveis na API, validando o status 200 e armazenando os dois primeiros livros (apenas o ISBN) em uma variável global para serem utilizados no próximo step.
    it('Listar livros', () => {
      cy.listaLivros().then((res) => {
        expect(res.status).to.eq(200);
        books = res.body.books.slice(0, 2).map(book => ({
          isbn: book.isbn
        }));
      });
    });
  
    // Quarto step reservando os dois livros para o usuário criado, utilizando o ID do usuário, o token de autenticação e os livros selecionados e validando que o status da resposta é 201.
    it('Reservar dois livros', () => {
      cy.alugaLivro(userId, token, books).then((res) => {
        expect(res.status).to.eq(201);
      });
    });
  
    // Quinto step validando que o usuário está com os livros reservados, utilizando o ID do usuário e o token de autenticação para listar as informações do usuário e validando que a resposta tem status 200 e que a lista de livros do usuário contém os dois livros reservados.
    it('Validar usuário com livros reservados', () => {
      cy.listaUsuario(userId, token).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.books).to.have.length(2);
      });
    });
  
  });