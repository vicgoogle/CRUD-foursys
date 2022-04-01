# Clients Crud

# Como rodar o projeto

- Executar o comando "yarn" para baixar as dependências do projeto:

```
yarn
```

- Copiar o arquivo .env.example para um novo chamado apenas .env (obs: os campos só foram      preenchidos na .env.example
  para facilitar a execução do projeto)

- Executar o banco mysql no docker utilizando o arquivo docker-compose.yml do projeto:

```
docker-compose up -d
```

ou

```
sudo docker-compose up -d
```

- Executar as migrations do projeto:

```
yarn typeorm migration:run
```

- Executar o projeto em sua máquina:

```
yarn dev:server
```
