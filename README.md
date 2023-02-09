# ORM com NodeJS: API com Sequelize e MySQL.


Nesse curso, vamos escrever uma API para um sistema de controle de alunos e turmas de uma escola de inglês. 
Vamos partir de um diagrama de banco, onde as tabelas já estão dadas, e, a partir desses dados, escreveremos nossa API do zero.

A diferença é que, dessa vez, usaremos um ORM, um mapeador de objeto relacional. Sequelize é o nome do ORM que usaremos. 
O Sequelize abstrai os comandos de operações de SQL, e faz com que possamos usar linguagem de programação que já estamos 
usando no backend para nos conectarmos e operarmos o banco. 
Ou seja, no nosso projeto, não iremos inserir queries de SQL dentro da aplicação que está escrita em JavaScript.

Utilizaremos apenas JavaScript para nos conectarmos, passarmos instruções para o banco, fazermos as operações de CRUD, etc. 
Então, o JavaScript, através do Sequelize, vai se encarregar de traduzir as instruções para o SQL, para o banco, e 
fazer as operações necessárias

Iremos organizar a nossa aplicação no padrão MVC. Não é apenas organizar a aplicação, organizar os arquivos, mas também como 
aplicamos o conceito MVC no fluxo da aplicação. Vamos ver como utilizar as ferramentas do Sequelize e para fazer o CRUD junto 
ao banco e devolver dados no formato JSON

Você vai aproveitar melhor esse curso se já tiver feito os cursos básicos de criação de API com Node e SQL que temos na nossa formação 
aqui na Alura. Não entraremos em detalhes durante o curso a respeito do JavaScript,do ambiente do Node e como fazer a conexão inicial com 
banco e o CRUD.

Muitas aplicações em Node utilizam Sequelize. Então, depois que você entender como o Sequelize funciona, conhecer alguns dos seus métodos, 
você já consegue desbravar projetos que utilizam esse ORM,escobrir mais ferramentas conforme a complexidade do projeto que você está 
trabalhando e também criar suas próprias APIs

# Requisitos do projeto.
- [X]  0 cliente não gostaria que resgistros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados
- [X]  Para Deixar a interface mais limpa, o cliente gostaria na lista de Pessoas, por Padrão, fossem exibidos somente os usuários ativos.
- [X]  Foram percebidas albuams falhas de validação dos formulários por parte do front-end, o que resultou em dados de email, invalidos no banco,
É desejavel que essa validação não seja seja responbilidade exclusiva do front-ent.
- [X]  E importante pode consultar todas as matrículas confirmadas referentes a estudante x de forma rápida.  

[Alura Curso 1](https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql/task/76884).  
[Alura Curso 2](https://cursos.alura.com.br/course/orm-nodejs-avancando-sequelize/task/79541).  




