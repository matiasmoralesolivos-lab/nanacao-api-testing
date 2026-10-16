# Nanacao API Testing

Pruebas automatizadas de una API REST para Cafetería Nanacao, utilizando **Jest** y **Supertest**.

## Tecnologías

- Node.js
- Express
- Jest
- Supertest

## Requisitos

- Node.js
- npm

## Instalación y ejecución

```bash
npm install
npm test
```

## Pruebas realizadas

- `GET /cafes`: verifica el código 200 y que la respuesta sea un arreglo con al menos un objeto.
- `DELETE /cafes/:id`: verifica el código 404 cuando el café no existe.
- `POST /cafes`: verifica que se agregue un café y se responda con el código 201.
- `PUT /cafes/:id`: verifica el código 400 cuando el ID del parámetro no coincide con el del payload.
