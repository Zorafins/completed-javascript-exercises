var ftoc = function(f) { // fahrenheit to celcius
  let fToRound = (f - 32) / 1.8;
  return Math.round(fToRound * 10) / 10; 
}

var ctof = function(c) { // celcius to fahrenheit
  let cToRound = (c * 1.8) + 32;
  return Math.round(cToRound * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
