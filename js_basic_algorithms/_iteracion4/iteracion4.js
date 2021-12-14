//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let superhero = avengers[0];

console.log(superhero);

//1.2 

avengers.unshift ("IRONMAN");

console.log(avengers);

// 1.3
console.log (avengers.length);

// 1.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push ("Morty", "Summer")

let last = rickAndMortyCharacters[rickAndMortyCharacters.length-1];

console.log (last);

// 1.5

rickAndMortyCharacters.push ("Lapiz Lopez");

console.log (rickAndMortyCharacters);
rickAndMortyCharacters.pop();

let first= rickAndMortyCharacters[0]

console.log(last)
console.log (first)

// 1.6
rickAndMortyCharacters.push ("Lapiz Lopez");

rickAndMortyCharacters.splice (1,1);

console.log (rickAndMortyCharacters);
