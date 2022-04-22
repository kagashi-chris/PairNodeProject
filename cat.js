const fs = require("fs");

module.exports = function (splitCommand) {
  if (splitCommand[0] === "cat") {
    fs.readFile(splitCommand[1], (err, data) => {
      if (err) throw err;
      else {
        process.stdout.write("\n" + data);
      }
    });
  }
};

//[cat, fileName]
