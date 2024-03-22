const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  hoten: String,
  taikhoan: String,
  sdt: String,
  matkhau: String,
  chucvu: Number,
  email: String,
  matkhau: String,
  ghichu: String,
  diachi: String,
});
const model = mongoose.model("nhan_viens", schema);
module.exports = model;
