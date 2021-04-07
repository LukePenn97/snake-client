const { INPUTS, ANTI, EMOTES } = require('./constants');
let connection;
let moveLoop;
let previousKey;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = () => {
    stdin.on('data', (key) => {
      
      if (key === '\u0003') {
        process.exit();
      }
      if (INPUTS[key]) {
        if (ANTI[key] !== previousKey) {
          previousKey = key;
          clearInterval(moveLoop);
          //connection.write(INPUTS[key]);
          if (key === "w" || key === "s") {
            moveLoop = setInterval(() => connection.write(INPUTS[key]), 100);
          } else {
            moveLoop = setInterval(() => connection.write(INPUTS[key]), 50);
          }
        }
      } else if (EMOTES[key]) {
        connection.write(EMOTES[key]);
        //dont stop me baby
      }
    });
  };
  handleUserInput();
  return stdin;
};



module.exports = {setupInput};