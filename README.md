# Blogs API - Backend Project
### Introdução

 <p>Olá, seja bem-vindo ao repositório do meu projeto Blogs API.</p>
 <p>Esse projeto consiste na criação de uma API com uma ORM (Object–relational mapping) do banco de dados MySQL chamada Sequelize. Essa ORM tem como função a facilitação da comunicação entre o servidor e o banco de dados, deixando as chamadas (queries) mais simplificadas para o programador e também deixando o código mais limpo.</p>
 <p>Esse projeto foi um dos desafios propostos pelo curso de Web Development da <a href="https://www.betrybe.com/">Trybe</a>.</p>
 
### Objetivo do Projeto

 <p>O projeto tem como objetivo principal o estudo da ORM Sequelize e a utilização do conceito SOLID.</p>
 <p>Todavia o projeto consiste em um backend de um Blogpost. Os usuários (Users) podem fazer postagens (BlogPosts) com suas determinadas categorias (Categories). O usuário pode ver todas as postagens publicadas, uma postagem específica e editar suas proprias postagens ou exclui-las.</p>
 
### Instalação local do projeto
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _matheus.hengo@gmail.com_.

#### Requisitos antes da instalação
- GIT instalado
- Node instalado
- Ter um Banco de Dados MySQL instalado e configurado em seu computador com usuário e senha
- Programa para fazer os requests. Recomenda-se o Postman.

1. Abra o terminal e crie uma pasta. Ou se preferir, utilize alguma pasta já criada em seu computador:
```javascript
  mkdir projetos-matthengo
```
2. Vá para a pasta desejada e faça o clone do projeto:
```javascript
  cd projetos-matthengo
  git clone git@github.com:Matthengo/backend-blogs-api-project.git
```
3. Vá para a pasta do projeto criado e instale as dependencias com o **npm install**:
```javascript
  cd backend-blogs-api-project
  npm install
```
4. Edite o arquivo .env-example com o usuario e senha do seu MySQL e o renomeie para .env.
(PS: O valor do JWT_SECRET pode ser qualquer valor que você deseje)

5. Dê o prestart do projeto e, após isso, dê o start:
```javascript
  npm prestart
  npm start
```

Uma vez utilizado o prestart, não é mais necessário a sua utilização, pois ele irá criar o banco de dados e migrar as migrates.

### TO-DO
Bom, a apresentação desse projeto tem um pequeno problema: A necessidade de ter um MySQL ja configurado na máquina de quem for utiliza-lo.
Meu objetivo é fazer uma conexão com algum banco de dados cloud para que não haja a necessidade de ter um MySQL configurado no PC.
