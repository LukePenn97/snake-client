let connection;

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
      }else if (key === 'w') {
        connection.write('Move: up');
      }else if (key === 'a') {
        connection.write('Move: left');
      }else if (key === 's') {
        connection.write('Move: down');
      }else if (key === 'd') {
        connection.write('Move: right');
      }else if (key === 'f') {
        connection.write('Say: F');
      }else if (key === 'g') {
        connection.write('Say: gg');
      }else if (key === 'e') {
        connection.write('Say: ez');
      }else if (key === 'q') {
        connection.write('Say: quit it');
      }else if (key === 'c') {
        connection.write('Say: chill');
      }else if (key === 'h') {
        connection.write('Say: hell ya');
      }
    });
  };
  handleUserInput();
  return stdin;
};



module.exports = {setupInput};