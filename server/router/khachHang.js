const express = require("express");
const router = express.Router();
const controller = require("../controller/khachHang");

router.post("/themKH", controller.themKH);
router.post("/suaKH", controller.suaKH);
router.post("/xoaKH", controller.xoaKH);

module.exports = router;
