const config = require("./config/config");
const env = require("./key/env");
const http = require("http");
const server = http.createServer(config);

server.listen(env.port, () => {
  console.log("Server listen in port -> " + env.port);
});
