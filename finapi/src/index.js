const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();

  const customerAlrearyExists = customers.some(
    (customer) => customer.cpf === cpf
    );

    if(customerAlrearyExists) {
      return response.status(400).json({ error: "Curtomer already exists!"});
    }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return response.status(201).send();
});

app.listen(3333);