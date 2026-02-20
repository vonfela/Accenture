Este é o READ ME para o teste técnico da Accenture para QA Engineer.

Instruções:

TESTE DE API COM CYPRESS E JAVASCRIPT:

RESUMO:
O desafio resume-se em utilizar algumas APIs para criar um usuário, autoriza-lo, listar os livros disponíveis no sistema, reservar duas opções a sua escolha, e ao final, listar os detalhes do usuário criado com os livros reservados.
O Swagger do desafio para consulta encontra-se em:
https://demoqa.com/swagger

Passo a Passo:
O desafio resume-se ao fluxo abaixo:
1. Criar um usuário (https://demoqa.com/Account/v1/User)
2. Gerar um token de acesso (https://demoqa.com/Account/v1/GenerateToken)
3. Confirmar se o usuário criado está autorizado (https://demoqa.com/Account/v1/Authorized)
4. Listar os livros disponíveis (https://demoqa.com/BookStore/v1/Books)
5. Alugar dois livros de livre escolha (https://demoqa.com/BookStore/v1/Books)
6. Listar os detalhes do usuário com os livros escolhidos (https://demoqa.com/Account/v1/User/{userID})


Requisitos:
1. Node.js v25.6.1
2. npm init (all default)
3. Install Cypress - npm install cypress --save-dev
4. npx cypress open
5. When Cypress GUI open, E2E testing, Continue, Electron, Scaffold example specs











TESTE FRONTEND:

