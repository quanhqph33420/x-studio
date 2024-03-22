const express = require("express");
const router = express.Router();
const controller = require("../controller/nhanVien");

router.post("/signUp", controller.signUp);
router.post("/signIn", controller.signIn);

module.exports = router;
