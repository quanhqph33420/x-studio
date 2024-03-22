
const nhanVienModel = require("../model/nhanVien");
const jwt = require("../key/jwt");

async function checkExist(taikhoan) {
  return await nhanVienModel
    .find({ taikhoan: taikhoan })
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

class nhanVien {
  async signUp(req, res) {
    const { hoten, taikhoan, sdt, chucvu, email, matkhau, ghichu, diachi } =
      req.body;
    if (await checkExist(taikhoan)) {
      await nhanVienModel
        .insertMany({
          hoten: hoten,
          taikhoan: taikhoan,
          sdt: sdt,
          chucvu: chucvu,
          email: email,
          matkhau: jwt.signSecretKey(matkhau),
          ghichu: ghichu,
          diachi: diachi,
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
  async signIn(req, res) {
    const { taikhoan, matkhau } = req.body;
    await nhanVienModel
      .find({
        taikhoan: taikhoan,
      })
      .then((result) => {
        const mk = jwt.verifySecretKey(result[0].matkhau);
        res.json(mk == matkhau ? true : false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new nhanVien();
