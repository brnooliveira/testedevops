# Configuração do Ambiente para o Projeto Rev Gas

Este repositório contém as instruções e configurações necessárias para iniciar o ambiente de desenvolvimento do projeto Rev Gas.

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto com os seguintes campos:

- MYSQL_ROOT_PASSWORD=coloque_seu_password_raiz
- MYSQL_DATABASE=escolha_um_nome_para_o_db_da_rev_gas    
- MYSQL_USER=seu_nome_de_usuario
- MYSQL_PASSWORD=meupasswordlegal
- SECRET_KEY=secret-key-do-django
- MYSQL_DB_HOST=db (service)
- MYSQL_DB_PORT=3306



2. Após criar o arquivo `.env`, execute o seguinte comando para iniciar os containers Docker:

- docker-compose up --build

  Isso iniciará os serviços necessários para o projeto.

## Acesso às Aplicações

- Frontend: [http://localhost:3000/](http://localhost:3000/)
- API: [http://localhost:8000/api/bancos/](http://localhost:8000/api/bancos/)
- A api aceita o seguinte query-params: codigo

## Preenchimento do Modelo de Banco de Dados

Para preencher o modelo do banco de dados, foi criado um comando que executa um script. Este script salva na entidade cada valor de código e nome do banco. É realizada uma verificação para saber se a entidade já possui aqueles valores da planilha.
Esse command é executado no up do container por padrao, mas tambem pode ser chamado a qualquer momento por pythonn manage.py preencher_tabela_banco.

## Nota Final

Estas são as instruções básicas para configurar o ambiente de desenvolvimento do projeto Rev Gas. Qualquer dúvida ou problema, sinta-se à vontade para entrar em contato.
