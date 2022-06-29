# Repositório do desafio Token Lab

Boas vindas ao repositório do desafio Token Lab. 

Projeto desenvolvido para uma vaga de estágio na Token Lab.

O desafio consiste em fazer um sistema web de calendário de eventos com backend e frontend.



# Sumário

- [Instruções](#instruções)
- [Stacks utilizadas](#stacks-utilizadas)
- [Documentação da API](#documentação-da-API)



## Instruções

Clonando o repositório

```bash
https://github.com/urielbochi/token-lab-desafio.git
```

Entrando no repositório

```bash
  cd token-lab-desafio
```

Instale as dependências na pasta base e na pasta back-end

```bash
  npm install
```

Inicie a aplicação back-end

```bash
  npm start
```

Inicie a aplicação front-end

```
npm start
```





## Stacks utilizadas

**Front-end**: Javascript, React js (Context, Hooks, Router)

**Back-end:** Node.js, JavaScript, Express, JWT, keyv, joi



## Documentação da API



## Autenticação

#### Realiza o registro de um usuário

POST

**body**

**/register**

```json
{
    "name": "Juliana",
    "email": "julianahappatsch@gmail.com",
    "password": "mysecretpassword",
    "confirmPassword": "mysecretpassword" 
}
```

#### Resultado

```json
{
    "id": 1,
    "name": "Juliana",
    "email": "julianahappatsch@gmail.com",
    "password": "$2b$10$/slvhjh0ANlwufUZGCBrLu05Cj4RWPDvl9ZhnsL.wV.if173f.6J6",
    "updated_at": "2022-06-29T02:31:30.504Z",
    "created_at": "2022-06-29T02:31:30.504Z"
}

```

#### Realiza o Login de um usuário

POST

**/login**

**body**

```json
{
    "email": "julianahappatsch@gmail.com",
    "password": "mysecretpassword"
}
```

##### Resultado

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2NDcwMDgxLCJleHAiOjE2NTY0NzM2ODF9.1Wy00ocMc85yjEb7lN2Apkc95qrHQH8vzBaSGkSBKac",
    "token_type": "Bearer",
    "expires_in": 3600
}
```



## Eventos

### Realiza a criação de um evento

POST

**/event/create**

**body**

```json
{
    "title": "Something about space dude",
    "date": "2022-07-15",
    "description": "These violent delights have violent ends",
    "startTime": "20:32",
    "endTime": "22:00",
    "userId": 1
}
```

#### Resultado

```json
{
    "id": 6,
    "title": "Something about space dude",
    "date": "2022-07-15",
    "description": "These violent delights have violent ends",
    "userId": 1
}
```

### Realiza a edição de um evento

PATCH

**/event/edit**

**body**  (atualiza os campos passados pelo body, busca o evento pelo id)

```json
{
    "title": "Hamlet",
    "description": "Amlet",
    "st": "20:32",
    "et": "22:00",
    "id": 1
}
```

### Realiza a remoção de um evento

DELETE

/event/delete/{userId}

### Realiza a listagem dos eventos de um usuário

GET

/event/list/{userId}

```json
{
    "id": 1,
    "title": "Hamlet",
    "date": "2022-07-15",
    "description": "Amlet",
    "st": "20:32",
    "et": "22:00",
    "userId": 1,
}
```



## Próximos passos

* Deploy no Heroku
* Testes unitários (back-end e front-end)
* Cadastro de eventos recorrentes

* Melhorar a segurança
* Implementar tela de perfil do usuário
* Refatorar a aplicação em Typescript













