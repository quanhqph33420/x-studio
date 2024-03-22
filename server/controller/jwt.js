const jwtKey = require("../key/jwt");
class jwt {
  encryptionLogin(req, res) {
    const token = jwtKey.signSecretKey(req.body);
    res.json(token);
  }

  decryptionLogin(req, res) {
    // const token = req.body.headers.Authorization;
    const token = req.headers.authorization;
    const result = jwtKey.verifySecretKey(token);
    res.json(result);
  }
}
module.exports = new jwt();
