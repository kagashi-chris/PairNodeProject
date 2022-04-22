const pwdCommand = require("./pwd");
const lsCommand = require("./ls");
const catCommand = require("./cat");

const curlCommand=require("./curl");

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);

  const splitCommand = cmd.split(" ");

  if (splitCommand.length === 1) {
    pwdCommand(cmd);
    lsCommand(cmd);
  } else if (splitCommand.length === 2) {
    catCommand(splitCommand);

    curlCommand(splitCommand);
  }

  setTimeout(function () {
    process.stdout.write("\nprompt>");
  }, 500);
});




