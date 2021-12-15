const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
   console.log("Este Alien tiene " + key+ "con valor: "+ alien[key])
   
}