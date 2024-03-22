const khachHangModel = require("../model/khachHang");
async function checkExist(hoten, diachi, sdt, email) {
  return await khachHangModel
    .find({
      hoten: hoten,
      diachi: diachi,
      sdt: sdt,
      email: email,
    })
    .then((result) => {
      if (result == "") {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log(err);
    });
}
class khachHang {
  async themKH(req, res) {
    const { hoten, diachi, sdt, email } = req.body;
    if (await checkExist(hoten, diachi, sdt, email)) {
      await khachHangModel
        .insertMany({
          hoten: hoten,
          diachi: diachi,
          sdt: sdt,
          email: email,
        })
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.json(false);
    }
  }
  async suaKH(req, res) {
    const { id, hoten, diachi, sdt, email } = req.body;
    await khachHangModel
      .findByIdAndUpdate(id, {
        $set: {
          hoten: hoten,
          diachi: diachi,
          sdt: sdt,
          email: email,
        },
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async xoaKH(req, res) {
    const { id } = req.body;
    await khachHangModel
      .findByIdAndDelete(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new khachHang();
