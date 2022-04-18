const boggle = require('node-boggle-solver');
const solver = boggle();

const getValidBoggleWords = async (req, res) => {
  try {
    const { boardString }  = req.body
    console.log("you're here, right where you're meant to be");
    console.log(boardString);

    //const tester = 'giz uek qse'
    let validWords = [];
    solver.solve(boardString, function (err, result) {
      validWords = result.list;
      console.log(validWords.length);
    })
    res.send(validWords);

  } catch (err) {
    console.log(err);
  }
}




module.exports = { getValidBoggleWords }