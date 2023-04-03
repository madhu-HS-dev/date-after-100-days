const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let result = addDays(new Date(), 100);
  const newDate = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(newDate);
});

app.listen(3000);

module.exports = app;
