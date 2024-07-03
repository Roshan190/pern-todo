const express = require("express");

const app = express();

app.get("", (request, response) => {
  response.send("Hello from server.");
});

app.listen(8000, () => {
  console.log(`Server is listing on port 8000`);
});
