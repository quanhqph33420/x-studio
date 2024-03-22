const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  hoten: String,
  diachi: String,
  sdt: String,
  email: String,
});
const model = mongoose.model("khach_hangs", schema);
module.exports = model;
