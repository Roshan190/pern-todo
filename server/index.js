const PORT = process.env.PORT ?? 8000;
const express = require("express");

const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(todoRoutes);

app.get("", (request, response) => {
  response.send("Hello from server.");
});

app.listen(PORT, () => {
  console.log(`Server is listing on port ${PORT}`);
});
