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
1. Visual Studio Code ou IDE de preferência;

2. Node.js v25.6.1 e NPM (Node Package Manager) = Baixar e instalar Node.js que por padrão vem junto da instalação o NPM: https://nodejs.org/en/blog/release/v25.6.1

3. Git = https://git-scm.com/install/

4. Git Bash = https://gitforwindows.org/

5. Clonar este repositório: Dentro da sua IDE, execute o comando no terminal:
    gh repo clone vonfela/Accenture

6. Cypress v13.17.0 (caso ja não esteja instalado) = npm install cypress --save-dev

7. Cucumber para Cypress = 
Execute o comando no terminal:
    npm install --save-dev @badeball/cypress-cucumber-preprocessor


8. Abrindo Cypress e executando testes = 
- Digitar no terminal: npx cypress open
- Clicar em "E2E Testing";
- Selecionar Electron e clicar em "Start E2E Testing in Electron"




COMO RODAR CYPRESS + CUCUMBER + GHERKIN:
Para rodar testes .feature, você precisa configurar o preprocessor do Cucumber no Cypress.

1. Instalar dependências necessárias:
Executar comando no terminal: npm install --save-dev @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor

2. É necessário configurar o cypress.config.js também porém isto ja está feito





TESTE FRONTEND:

1. Acessar o site https://demoqa.com/
2. Escolher a opção "Alerts, Frame & Wubdiws"
3. Clicar no submenu "Browser Windows"
4. Clicar no botão "new Windows"
5. Certifica-se que uma nova janela foi aberta, e validar a msg "Thi is a sample page"
6. Fechar a nova janela