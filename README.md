# README

Este é o READ ME para instruir a navegação e execução do desafio.

## INTRODUÇÃO:

No desafio proposto (Desafio - QA Engineer.pdf), foi dado um desafio de teste de API (página 3 do pdf) e cinco opções de teste de UI/Frontend/E2E onde escolhi a segunda opção (página 5 do pdf) de teste de Frontend.

Para o teste de API foi utilizado o conceito de Commands onde centralizo os requests mais comuns criando comandos customizados para serem utilizados como métodos Cypress durante os testes, deixando o código mais limpo, reutilizável e escalável.

Para o teste de Frontend foi utilizado o conceito de Page Objetcs onde a idéia é a mesma do Commands para testes de API, centralizar os elementos que mais utilizarei no projeto para serem utilizados como métodos Cypress durante os testes, deixando o código mais limpo, reutilizável e escalável.

---

## INSTRUÇÕES:

### REQUISITOS:

1. Visual Studio Code ou IDE de sua preferência;

2. Node.js v25.6.1 e NPM (Node Package Manager) = Baixar e instalar Node.js que por padrão vem junto da instalação o NPM: https://nodejs.org/en/blog/release/v25.6.1

3. Git = https://git-scm.com/install/

4. Git Bash = https://gitforwindows.org/

---

### INSTALAÇÃO DO PROJETO:

5. Clonar este repositório: Dentro da sua IDE, execute os comandos no terminal:

```bash
gh repo clone vonfela/Accenture
cd Accenture
```

6. Instalar automaticamente todas as dependências listadas no package.json, incluindo o Cypress na versão correta, no terminal da sua IDE execute o comando:

```bash
npm install
```

OBS: É NECESSÁRIO QUE SEJA O Cypress v13.17.0 ESPECIFICAMENTE ESTA VERSÃO por conta da compatibilidade da biblioteca utiliza para executar os testes em BDD, caso ja não esteja instalado dê downgrade na versão do seu Cypress com os comandos:

```bash
npm uninstall cypress
npm cache clean --force
npm install -D cypress@13.17.0
```

7. Pronto! Agora você ja tem tudo necessário para rodar os testes, basta apenas executa-los;

8. Executando testes no terminal e no runner/GUI do Cypress:

- Para executar TODOS os testes (API e Frontend) no terminal, digitar este comando no terminal:

```bash
npx cypress run
```

- Para executar TODOS os testes (API e Frontend) no runner/GUI do Cypress, digitar este comando no terminal:

```bash
npx cypress open
```

- Para executar apenas este teste de API no terminal, digitar este comando no terminal:

```bash
npx cypress run --spec "cypress/e2e/1_API_Test/desafioAPI.cy.js"
```

- Para executar apenas o teste de Frontend no terminal, digitar este comando no terminal:

```bash
npx cypress run --spec "cypress/e2e/2_E2E_Tests/desafioFrontend.cy.js"
```

---

## ESTRUTURA DO PROJETO:

```
ACCENTURE/
│
├─ cypress/
│   │
│   ├─ e2e/
│   │   │
│   │   ├─ 1_API_Test/
│   │   │   └─ desafioAPI.cy.js
│   │   │
│   │   └─ 2_E2E_Tests/
│   │       │
│   │       ├─ BDD/
│   │       │   ├─ desafioFrontend.feature
│   │       │   ├─ desafioFrontend.page.js
│   │       │   └─ desafioFrontend.steps.js
│   │       │
│   │       └─ desafioFrontend.cy.js
│   │
│   ├─ fixtures/
│   │
│   └─ support/
│       │
│       ├─ pages/
│       │   └─ navegaPagina.page.js
│       │
│       ├─ commands.js
│       └─ e2e.js
│
├─ node_modules/
│
├─ cypress.config.js
├─ package.json
├─ package-lock.json
├─ README.md
└─ Desafio - QA Engineer.pdf
```

---

## TESTE DE API COM CYPRESS E JAVASCRIPT:

Documentação da API disponível em: https://demoqa.com/swagger

O código do teste em si está disponível no arquivo:

```
ACCENTURE/
│
├─ cypress/
│   │
│   ├─ e2e/
│   │   │
│   │   ├─ 1_API_Test/
│   │   │   └─ desafioAPI.cy.js
```

O código dos comandos customizados utilizados no teste em si está disponível no arquivo:

```
ACCENTURE/
│
├─ cypress/
│   │
│   └─ support/
│       │
│       ├─ commands.js
```

No primeiro desafio, teste de API, o cenário é:

1. Criar um usuário (https://demoqa.com/Account/v1/User);
2. Gerar um token de acesso para este usuário (https://demoqa.com/Account/v1/GenerateToken);
3. Confirmar se o usuário criado está/foi autorizado (https://demoqa.com/Account/v1/Authorized)
4. Listar os livros disponíveis (https://demoqa.com/BookStore/v1/Books)
5. Alugar dois livros de livre escolha (https://demoqa.com/BookStore/v1/Books)
6. Listar os detalhes do usuário com os livros escolhidos (https://demoqa.com/Account/v1/User/{userID})

Para executar apenas este teste de API no terminal, digitar este comando no terminal:

```bash
npx cypress run --spec "cypress/e2e/1_API_Test/desafioAPI.cy.js"
```

Para executar apenas este teste de API no runner/GUI do Cypress, digitar este comando no terminal:

```bash
npx cypress open
```

Para executar TODOS os testes (API e Frontend) no terminal, digitar este comando no terminal:

```bash
npx cypress run
```

---

## TESTE FRONTEND:

O código do teste em si está disponível no arquivo:

```
ACCENTURE/
│
├─ cypress/
│   │
│   ├─ e2e/
│   │   │
│   │   │
│   │   └─ 2_E2E_Tests/
│   │       │
│   │       └─ desafioFrontend.cy.js
```

O código do Page Objects utilizado no teste em si está disponível no arquivo:

```
ACCENTURE/
│
├─ cypress/
│   │
│   │
│   └─ support/
│       │
│       ├─ pages/
│       │   └─ navegaPagina.page.js
```

Para o teste de Frontend o cenário é o seguinte:

1. Acessar o site https://demoqa.com/
2. Escolher a opção "Alerts, Frame & Wubdiws"
3. Clicar no submenu "Browser Windows"
4. Clicar no botão "new Windows"
5. Certifica-se que uma nova janela foi aberta, e validar a msg "Thi is a sample page"
6. Fechar a nova janela

Para executar apenas este teste de Frontend no terminal, digitar este comando no terminal:

```bash
npx cypress run --spec "cypress/e2e/2_E2E_Tests/desafioFrontend.cy.js"
```

Para executar apenas este teste de Frontend no runner/GUI do Cypress, digitar este comando no terminal:

```bash
npx cypress open
```

Para executar TODOS os testes (API e Frontend) no terminal, digitar este comando no terminal:

```bash
npx cypress run
```

---


























## Notas de choro do QA:

Antes de chorar, eu gostaria de agradecer imensamente e de coração pela oportunidade desta entrevista e pelo tempo reservado de vocês para prestar atenção até aqui, então espero que esta parte pelo menos os entretenham, apesar de eu ter sofrido no processo de desenvolvimento desse framework/desafio, eu me diverti muito também e com certeza termino este desafio com mais lições e experiências aprendidas e me sentindo um profissional melhor.

Me foi enviado o teste técnico na quarta-feira, dia 18 de fevereiro, e isso já foi uma dor física ao ler o prazo de entrega após ter lido o conteúdo do PDF do desafio, deixa eu contextualizar vocês do porquê:
Felizmente estou empregado e atualmente este cliente é um projeto de segurança privada, portanto as políticas de acesso/trânsito no escritório são bem estritas, como, por exemplo, eu não poder usar o celular, tenho que guardar em um armário reservado fora das salas consideradas red zones no escritório, que é justamente onde eu estou alocado.
Atualmente, meu modelo de trabalho é híbrido, moro em São Bernardo do Campo e o escritório fica no Butantã, na capital, apesar de São Bernardo do Campo ser do lado de SP e eu ter fácil acesso/movitação entre as cidades, é bem tranquilo aceitar trabalhos por SP, até porque Qualidade de Software é escassa e extremamente concorrida por aqui (eu mesmo só trabalhei uma vez aqui em SBC mesmo e foi na minha primeira experiência como QA, muito tempo atrás hahaha), entro às 10am e saio às 7pm, porém para chegar às 10 no Butantã eu preciso sair muito mais cedo, pois o trajeto de transporte público leva duas horas e meia de trajeto (eu tenho carro, porém é muito alto o custo de manutenção do carro + gasolina indo de carro todo dia, vale mais a pena pegar o vale-transporte e ir de transporte público), e é o mesmo tempo de viagem na volta para casa, mas felizmente o modelo é híbrido, é 2 dias em casa e 3 no escritório.
Ou seja, acordo cedo para correr para o trabalho, passo o dia "isolado" da sociedade no trabalho por conta das políticas da empresa/cliente e chego tarde em casa, lá pelas 10pm, ou seja, o meu tempo para qualquer outra coisa sem ser trabalho é muito escasso :( mas é claro que isso não é desculpa, mas às vezes (o que não é ideal, mas é frequente hahaha) devemos fazer sacrifícios por uma coisa melhor (que no caso foi "complertar" este desafio). O que quero dizer aqui é que tentei implementar o teste com BDD para mostrar para vocês que sei e tenho experiência/conhecimento da técnica de BDD, mostrando uma abrangência maior das minhas habilidades, pensei até mesmo em fazer um outro projeto apenas com o BDD, pois assim faria com BDD puro com Ruby em vez de JavaScript, poois o Cucumber é melhor com Ruby, mas aí me atentei no ponto que vocês pedem, que é "...fazendo com que todos os steps sejam executados de forma contínua e com uma única execução.", mas acredito que possivelmente vocês estavam falando apenas para o teste de API, mas fiquei com isso na cabeça e quis manter tudo em um projeto só, uma única execução para visualizar todos os testes (apesar de ter a opção de executá-los individualmente também).
No final das contas, não consegui rodar o teste em BDD por conta de conflito com a versão da biblioteca (Esbuild e Preprocessor) que estava utilizando para rodar o Cucumber com Cypress, o que me deu muitas das minhas poucas horas de dor de cabeça, por isso está especificada aquela versão do Cypress, mas como não deu certo no final das contas e eu só dropei a ideia, fiquei com raiva e comecei a sair deletando tudo, por isso que provavelmente está faltando algo das dependências das bibliotecas do BDD, aí me acalmei e resolvi deixar apenas para visualização/consulta de vocês os 3 arquivos do teste em BDD com Cucumber para que vocês notem que eu sei BDD + Cucumber + Gherkin, consigo fazer, porém tive apenas problemas de conflitos, do qual eu não podia perder tanto tempo (mais do que já tinha) tentando resolver isso, então apenas fiz o básico, que é o teste direto em Cypress apenas com page objects, apenas para ter também um teste de frontend além do de API para mostrar para vocês que sei, entendo e consigo fazer ambos, frontend e API.
Então, para encerrar, este é o resultado final do que consegui fazer em dois dias, porém com poucas horas hábeis por madrugada hahaha, foram duas madrugadas intensas para entregar isso do meu jeito para vocês, inclusive agora, varado da madrugada para terminar o teste de frontend e termino toda a parte de comentários e documentação do projeto/desafio aqui para vocês, sendo precisamente 14:31 da tarde deste dia 20/02/2026, que é a data limite de entrega deste desafio.
Novamente, obrigado de coração pela paciência e tempo até aqui, espero que este projeto tenha agradado vocês de qualquer forma.
