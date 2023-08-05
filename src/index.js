module.exports = function reverse (n) {

  const string = String(n);

  let b = string[0] === '-' ? string.slice(1) : string;


  let reverseString = b.split('').reverse();

  reverseString[0] === '0' ? string.slice(1) : reverseString;

  let a = reverseString.join('');

  return Number(a)
}
