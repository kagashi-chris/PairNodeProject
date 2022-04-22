const pwdCommand = require("./pwd");
const lsCommand = require("./ls");
const catCommand = require("./cat");

const curlCommand = require("./curl");

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  done("You typed: " + cmd);

  const splitCommand = cmd.split(" ");

  if (splitCommand.length === 1) {
    pwdCommand(cmd, done);
    lsCommand(cmd, done);
  } else if (splitCommand.length === 2) {
    catCommand(splitCommand, done);

    curlCommand(splitCommand, done);
  }

  setTimeout(function () {
    process.stdout.write("\nprompt>");
  }, 500);
});

const done = (output) => {
  process.stdout.write(output);
};
