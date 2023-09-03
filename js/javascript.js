// var nombre  = "Agustin"   
// var apellido = "Flores"

// console.log (nombre + " " + apellido);

// // suma

// let numero1 = 10
// let numero2 = 23

// let result = numero1 + numero2

// console.log (result);

// let numero3 = 20
// let numero4 = result + numero3

// console.log (numero3 + result);


// // IF de heladeria 

// let Helado = 600;
// let Topping = "Frutillas";
// let Precio;
// let PrecioFinal;

// if (Topping == "Oreo") {
//   PrecioFinal = Helado + 10;
// } else if (Topping == "KitKat") {
//   PrecioFinal = Helado + 15;
// } else if (Topping === "Kinder") {
//   PrecioFinal = Helado + 25;
// } else {
//     console.log ("Lamentablemente no tenemos "  + Topping + " en stock." )
//   PrecioFinal = Helado;
// }

// console.log("El precio final del helado + " + Topping + " es: $" + PrecioFinal);



// // SWITCH de restaurant 

// let PlatoOrdenado = "Verduras"
// switch (PlatoOrdenado) {
// case "Carne":
// console.log("Le recomendamos maridar este plato con una copa de vino tinto");
// break;
// case "Pescado":
// console.log("Le recomendamos maridar este plato con una copa de vino blanco");
// break;
// case "Verduras" :
// console.log("Este plato viene con agua sin gas incluida");
// break;
// default:
// console.log("Descargue nuestro menú con el código QR y conozca nuestros platos disponibles");
// }


// // FOR

// let TareaArray = ["if" , "switch", "for", "arrays", "while"];
// let i;

// for (let i = 0; i <= 4; i++) {
//     console.log (TareaArray [i]);
//     TareaArray.push(i)
// }

// // WHILE

// let numero = 1;

// while (numero < 11) {
//   console.log("Número menor que 11. Su número es: " + numero);
//   numero++;
// }

// console.log("El número ya no es menor que 11");



function saludo(nombre) {
    nombre = prompt("Ingresa tu nombre para continuar:");
  
    if (nombre === null || nombre === "") {
      alert("Debes ingresar tu nombre para avanzar.");
      saludo();
    } else {
      alert("¡Hola, " + nombre + "! Bienvenido.");
    }
  }
  
  saludo();
  
  
  
  
  
  
  







