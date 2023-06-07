const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

app.get("/todo", (req, res) => {
  res.json({ hello: "hi!" });
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
