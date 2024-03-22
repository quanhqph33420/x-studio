class index {
  index(req, res) {
    res.send(
      ' <h1 style="background-color: rgb(168, 168, 246); color: yellow; text-align:center;padding:10px">Running...</h1>'
    );
  }
}
module.exports = new index();
