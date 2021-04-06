const {IP, PORT} = require("./constants");
const net = require('net');
const {setupInput} = require("./input.js");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("connected!");
    conn.write('Name: LEP');
  });
  //conn.write('Move: up');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

module.exports = {connect};