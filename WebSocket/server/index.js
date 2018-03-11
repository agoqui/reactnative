const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.use(function(req, res) {
  res.send({ msg: "hello" });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws, req) {
  ws.on("message", function incoming(message) {
    if (message === "Bonjour") {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send("Bonjour");
        }
      });
    }
  });
});

server.listen(5001, function listening() {
  console.log("Listening on %d", server.address().port);
});
