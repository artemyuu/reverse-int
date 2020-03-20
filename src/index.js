module.exports = function reverse (n) {
  if( n > 0) n += "";
  else n = n*(-1) + "";
  return (n > 0) ? n.split('').reverse().join('') : (n).split('').reverse().join('');
}
