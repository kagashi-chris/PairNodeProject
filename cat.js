const fs = require("fs");

module.exports = function (splitCommand, done) {
  if (splitCommand[0] === "cat") {
    fs.readFile(splitCommand[1], (err, data) => {
      if (err) done(err);
      else {
        done("\n" + data);
      }
    });
  }
};

//[cat, fileName]
