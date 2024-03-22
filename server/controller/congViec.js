const congViecModel = require("../model/congViec");

class congViec {
  async layCV(req, res) {
    const { idnhanvien } = req.body;
    await congViecModel.find({ id });
  }

  async themCV(req, res) {
    const { idnhanvien, tencongviec, ngaybatdau, ngayhethan, trangthai, mota } =
      req.body;
    await congViecModel
      .updateMany(
        { idnhanvien: idnhanvien },
        {
          $push: {
            congviec: {
              tencongviec: tencongviec,
              ngaybatdau: ngaybatdau,
              ngayhethan: ngayhethan,
              trangthai: trangthai,
              mota: mota,
            },
          },
        },
        { upsert: true }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async suaCV(req, res) {
    const {
      idcongviec,
      idnhanvien,
      tencongviec,
      ngaybatdau,
      ngayhethan,
      trangthai,
      mota,
    } = req.body;
    await congViecModel
      .updateMany(
        { idnhanvien: idnhanvien, "congviec._id": idcongviec },
        {
          $set: {
            "congviec.$": {
              tencongviec: tencongviec,
              ngaybatdau: ngaybatdau,
              ngayhethan: ngayhethan,
              trangthai: trangthai,
              mota: mota,
            },
          },
        }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async xoaCV(req, res) {
    const { idcongviec, idnhanvien } = req.body;
    await congViecModel
      .updateMany(
        { idnhanvien: idnhanvien },
        {
          $pull: {
            congviec: {
              _id: idcongviec,
            },
          },
        }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new congViec();
