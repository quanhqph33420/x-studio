const express = require("express");
const mongoose = require("mongoose");

const env = require("../key/env");
const indexRouter = require("../router/index");
const nhanVienRouter = require("../router/nhanVien");
const jwtRouter = require("../router/jwt");
const khachHangRouter = require("../router/khachHang");
const congViecRouter = require("../router/congViec");
const dichVuRouter = require("../router/dichVu");

const app = express();
app.use(express.json());

app.use("/nhanvien", nhanVienRouter);
app.use("/jwt", jwtRouter);
app.use("/khachhang", khachHangRouter);
app.use("/", indexRouter);
app.use("/congviec", congViecRouter);
app.use("/dichvu", dichVuRouter);

mongoose
  .connect(`${env.ip_mongodb}/${env.db_name}`)
  .then(() => {
    console.log("Connected to -> " + env.db_name);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
