/// <reference types="cypress" />

//describe('Book Store - Fluxo completo simples')
//
//it('cria usuário, autentica, aluga dois livros e valida detalhes do usuário', () => {
//
//})



describe('Fluxo completo API BookStore', () => {

    // Aqui estou criando uma variável para gerar um usuário dinâmico/aleatório a cada execução.
    const user = {
      userName: `felipe_${Date.now()}`, // Utilizo o Date.now() para gerar um usuário com timestamp atual para gerar a aleatoriedade.
      password: 'Test@12345'
    };
    
    // Aqui estou criando variáveis globais para guardar os dados que serão retornados e utilizados em várias etapas do teste, como o ID do usuário, o token de autenticação e os livros selecionados.
    let userId;
    let token;
    let books;
  
    it('Criar usuário', () => {
      cy.criaUsuario(user).then((res) => {
        expect(res.status).to.eq(201);
        userId = res.body.userID;
      });
    });
  
    it('Gerar token', () => {
      cy.geraToken(user).then((res) => {
        expect(res.status).to.eq(200);
        token = res.body.token;
      });
    });
  
    it('Listar livros', () => {
      cy.listaLivros().then((res) => {
        expect(res.status).to.eq(200);
        books = res.body.books.slice(0, 2).map(book => ({
          isbn: book.isbn
        }));
      });
    });
  
    it('Reservar dois livros', () => {
      cy.alugaLivro(userId, token, books).then((res) => {
        expect(res.status).to.eq(201);
      });
    });
  
    it('Validar usuário com livros reservados', () => {
      cy.listaUsuario(userId, token).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.books).to.have.length(2);
      });
    });
  
  });