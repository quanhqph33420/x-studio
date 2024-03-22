const express = require("express");
const router = express.Router();
const controller = require("../controller/dichVu");
router.post("/themDV", controller.themDV);
router.post("/suaDV", controller.suaDV);
router.post("/xoaDV", controller.xoaDV);
module.exports = router;
