const dotenv = require("dotenv");
dotenv.config();
class env {
  port = process.env.port || 8000;

  ip_mongodb = process.env.ip_mongodb;

  secret_key = process.env.secret_key;

  db_name = process.env.db_name;

  ip = process.env.ipv4 + this.port;
}
module.exports = new env();
