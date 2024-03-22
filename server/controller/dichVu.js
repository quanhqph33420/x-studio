const dichVuModel = require("../model/dichVu");
async function checkExist(tendichvu, trangthai, mota, giatien) {
  return await dichVuModel
    .find({
      tendichvu: tendichvu,
      trangthai: trangthai,
      mota: mota,
      giatien: giatien,
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
class dichVu {
  async themDV(req, res) {
    const { tendichvu, trangthai, mota, giatien } = req.body;
    if (await checkExist(tendichvu, trangthai, mota, giatien)) {
      await dichVuModel
        .insertMany({
          tendichvu: tendichvu,
          trangthai: trangthai,
          mota: mota,
          giatien: giatien,
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
  async suaDV(req, res) {
    const { id, tendichvu, trangthai, mota, giatien } = req.body;
    await dichVuModel
      .findByIdAndUpdate(id, {
        $set: {
          tendichvu: tendichvu,
          trangthai: trangthai,
          mota: mota,
          giatien: giatien,
        },
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async xoaDV(req, res) {
    const { id } = req.body;
    await dichVuModel
      .findByIdAndDelete(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new dichVu();
