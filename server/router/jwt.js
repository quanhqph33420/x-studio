const express = require("express");
const router = express.Router();
const controller = require("../controller/jwt");

router.post("/encryptionLogin", controller.encryptionLogin);
router.post("/decryptionLogin", controller.decryptionLogin);

module.exports = router;
