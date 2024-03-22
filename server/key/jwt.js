const env = require("./env");
const jsonwebtoken = require("jsonwebtoken");
class jwt {
  signSecretKey(data) {
    const token = jsonwebtoken.sign(data, env.secret_key);
    return token;
  }
  verifySecretKey(token) {
    const data = jsonwebtoken.verify(token, env.secret_key);
    return data;
  }
}
module.exports = new jwt();
