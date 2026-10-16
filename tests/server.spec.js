
const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  test("GET /cafes devuelve status 200 y un arreglo con al menos un objeto", async () => {
    const response = await request(server).get("/cafes");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});


  test("DELETE /cafes/:id devuelve 404 si el café no existe", async () => {
    const response = await request(server)
      .delete("/cafes/999")
      .set("Authorization", "token-de-prueba");

    expect(response.statusCode).toBe(404);
  });

  test("POST /cafes agrega un nuevo café y devuelve 201", async () => {
    const nuevoCafe = {
      id: 100,
      nombre: "Latte",
    };

    const response = await request(server)
      .post("/cafes")
      .send(nuevoCafe);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(nuevoCafe),
      ])
    );
  });

  test("PUT /cafes/:id devuelve 400 si los ID no coinciden", async () => {
    const cafeActualizado = {
      id: 1,
      nombre: "Latte",
    };

    const response = await request(server)
      .put("/cafes/2")
      .send(cafeActualizado);

    expect(response.statusCode).toBe(400);
  });
