const boggle = require('node-boggle-solver');
const solver = boggle();

const getValidBoggleWords = async (req, res) => {
  try {
    const { boardString }  = req.body
    let validWords = [];

    solver.solve(boardString, function (err, result) {
      validWords = result.list;
    })
    res.status(200);
    res.send(validWords);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}


module.exports = { getValidBoggleWords }