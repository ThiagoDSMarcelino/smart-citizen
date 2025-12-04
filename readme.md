# Smart Citizen

## Como rodar

```bash
docker-compose up -d

yarn migration:run

yarn start
```

## Endpoint

### Criar um produto

`POST http://localhost:3000/products`

#### Body

```json
{
    "name": "teste",
    "price": 1.5,
    "category": "eletronico",
    "stock": 10
}
```

### Listar todos os produtos

`GET http://localhost:3000/products`

### Atualizar um produto

`PATCH http://localhost:3000/products/:id`

```json
{
    "sla": "sla"
}
```

### Excluir um produto

`DELETE http://localhost:3000/products/:id`
