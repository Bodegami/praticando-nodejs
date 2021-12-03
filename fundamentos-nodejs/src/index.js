const { request, response } = require('express');
const express = require('express');

const app = express();
const port = 3333;

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite!" });
});

app.listen(port);