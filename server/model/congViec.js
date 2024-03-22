const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  idnhanvien: String,
  congviec: [
    {
      tencongviec: String,
      ngaybatdau: String,
      ngayhethan: String,
      trangthai: Number,
      mota: String,
    },
  ],
});
const model = mongoose.model("cong_viecs", schema);
module.exports = model;
