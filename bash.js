const pwdCommand=require('./pwd');
const lsCommand=require('./ls')


process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);


  pwdCommand(cmd);
  lsCommand(cmd);
  setTimeout(function() {
    process.stdout.write('\nprompt>')},0 );
  
});



