# Smart Citizen

## Como rodar

```bash
docker-compose up -d

yarn migration:run

yarn start
```

## Endpoint

Tem a descrição dos endpoints nesse readme e também um arquivo para o Insomnia que usei para testar

### Criar um produto

`POST http://localhost:3000/products`

#### Body

Nesse endpoint há validação do body, seguindo esses parâmetros:

- name: string não nula
- description: string opcional
- price: valor decimal de no mínimo 0
- category: string não nula
- stock: valor inteiro de no mínimo 0
- discount: valor decimal opcional, no caso de enviar deve ser no mínimo 0 e no máximo 100

Exemplo:

```json
| {
    "name": "Luxurious Marble Hat",
    "price": 324.49,
    "category": "Computer",
    "stock": 10
}
```

### Listar todos os produtos

`GET http://localhost:3000/products`

### Busca produto por ID

`GET http://localhost:3000/products/:id`

### Atualizar um produto

`PATCH http://localhost:3000/products/:id`

Nesse endpoint há validação do body, seguindo esses parâmetros, levando em conta que todos parâmeros são opcionais:

- name: string
- description: string
- price: valor decimal de no mínimo 0
- category: string
- stock: valor inteiro de no mínimo 0
- discount: valor decimal de no mínimo 0 e no máximo 100

Exemplo:

```json
{
    "description": "Lorem ipsum dolor sit amet."
}
```

### Excluir um produto

`DELETE http://localhost:3000/products/:id`
