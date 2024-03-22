const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  tendichvu: String,
  trangthai: Number,
  mota: String,
  giatien: Number,
});
const model = mongoose.model('dich_vus', schema);
module.exports = model;
