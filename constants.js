const IP = "localhost";//"135.23.222.131";
const PORT = 50541;
const INPUTS = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
};
const EMOTES = {
  f: 'Say: F',
  g: 'Say: gg',
  e: 'Say: ez',
  q: 'Say: Howdy',
  c: 'Say: CrackIsWack',
  h: 'Say: help',
};
const ANTI = {
  w: "s",
  s: "w",
  a: "d",
  d: "a"
};
module.exports = {
  IP,
  PORT,
  INPUTS,
  ANTI,
  EMOTES
};