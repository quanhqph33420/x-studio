const express = require("express");
const router = express.Router();
const controller = require("../controller/congViec");
router.post("/themCV", controller.themCV);
router.post("/suaCV", controller.suaCV);
router.post("/xoaCV", controller.xoaCV);
module.exports = router;
