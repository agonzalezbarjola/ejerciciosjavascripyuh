const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
function showp (){
for (let index = 0; index < products.length; index++) {
    if (products[index].includes("Camiseta")){
        console.log(products[index]);
    }
}
}

