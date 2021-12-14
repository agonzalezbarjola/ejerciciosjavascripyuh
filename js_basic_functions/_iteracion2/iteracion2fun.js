const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let = palabramaslarga = param[0];
  for (let index = 1; index < palabramaslarga.length; index++) {
    if (param[index].length > palabramaslarga.length) {
      palabramaslarga= param[index];
    }
  }
  return console.log (palabramaslarga);
}

findLongestWord(avengers)
