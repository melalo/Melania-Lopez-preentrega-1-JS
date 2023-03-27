let usuarioGuardado = "Mela";
let passGuardado = "123";
let ingreso = false;
let producto1 = "Shampoo de Lavanda";
let producto2 = "Acondicionador de Lavanda";
let producto3 = "Jabón de Lavanda";
let producto4 = "Shampoo de Romero";
let producto5 = "Acondicionador de Romero";
let producto6 = "Jabón de Romero";
let precioShampoo = 5000;
let precioAcond = 4500;
let precioJabon = 3000;
let precioDesc = .25;
let precioTotal=0;
let cantidadProd1=0;
let cantidadProd2=0;
let cantidadProd3=0;
let cantidadProd4=0;
let cantidadProd5=0;
let cantidadProd6=0;
let cantidadProd7=0;


alert("Bienvenido/ a Rainforest Lab");
//funcion para validar ingreso del usuario
const validar = function(usuarioIngresado, passIngresado){
  console.log("usuario:" + usuarioIngresado);
  console.log("pass:" + passIngresado);
  if (usuarioGuardado === usuarioIngresado && passGuardado === passIngresado) {
    alert("Bienvenido/a  " + usuarioGuardado + ", ya puedes elegir tus productos");
    ingreso = true;
  } else {
    alert("El usuario o contraseña está incorrecto, favor intentar de nuevo.");
  } 
}

let usuarioIngresado = prompt("Ingresa tu usuario:");
let passIngresado = prompt("Ingresa tu password:");
validar(usuarioIngresado, passIngresado);

//funciones para calcular el total de la seleccion de productos
function calcDescuento (p_precioProducto){
  p_precioProducto = p_precioProducto - (p_precioProducto*precioDesc);
  return p_precioProducto;
}
function precioSeleccion (p_precioProducto, p_cantidadProducto, p_tieneDescuento){
  if(p_tieneDescuento){
      p_precioProducto = calcDescuento(p_precioProducto);
  }
  return (p_precioProducto * p_cantidadProducto);
}


//carrito-menu de seleccion
 if (ingreso) { 
  alert("APROVECHA! todos los shampoos tienen un 25% de descuento !");
  let opcion = prompt(
    " Elige tus productos: \n1-Shampoo de  Lavanda \n2-Acondicionador de Lavanda \n3-Jabón de Lavanda \n4-Shampoo de  Romero \n5-Acondicionador de Romero \n6-Jabón de Romero \nO presiona X para finalizar."
  );

  while (opcion != "x") {
    switch (opcion) {
      case "1":
        cantidadProd1 = parseInt(prompt ( "Agrega la cantidad de " +  producto1 + " que desees. \nPrecio regular: ₡" +  precioShampoo + ", precio con descuento: " + "₡" + calcDescuento(precioShampoo) ));
        precioTotal += precioSeleccion(precioShampoo,cantidadProd1,true);
        break;
      case "2":
        cantidadProd2 = parseInt(prompt( "Agrega la cantidad de " + producto2 +  " que desees. \nPrecio regular: ₡" +  precioAcond));
        precioTotal += precioSeleccion(precioAcond,cantidadProd2, false);
        break;
      case "3":
        cantidadProd3 = parseInt(prompt( "Agrega la cantidad de" + producto3 + " que desees. \nPrecio regular: ₡" +  precioJabon ));
        precioTotal += precioSeleccion(precioJabon,cantidadProd3, true);
        break;
      case "4":
        cantidadProd4 = parseInt(prompt( "Agrega la cantidad de " + producto4 +" desees. \nPrecio regular: ₡" +  precioShampoo + ", precio con descuento: "  + "₡" +  calcDescuento(precioShampoo)));
        precioTotal += precioSeleccion(precioShampoo,cantidadProd4,true);
        break;
      case "5":
        cantidadProd5 = parseInt(prompt( "Agrega la cantidad de " + producto5 + " que desees. \nPrecio regular: ₡" +  precioAcond));
        precioTotal += precioSeleccion(precioAcond,cantidadProd5, false)
        break;
      case "6":
        cantidadProd6 = parseInt(prompt( "Agrega la cantidad de " + producto6 + " que desees. \nPrecio regular: ₡" +  precioJabon));
         precioTotal += precioSeleccion(precioAcond,cantidadProd6, false)
        break;
      default:
        alert("Opción inválida");
        break;
    }
  //cond de salida del while
  opcion = prompt( " Elige tus productos: \n1-Shampoo de  Lavanda \n2-Acondicionador de Lavanda \n3-Jabón de Lavanda \n4-Shampoo de  Romero\n5-Acondicionador de Romero\n6-Jabón de Romero \nO presiona X para finalizar.");
  }
  alert("Resumen de tu compra:\n"  + cantidadProd1 + " " + producto1 + " Precio c/u: ₡" + calcDescuento(precioShampoo) + "\n"  + cantidadProd2 + " " + producto2 + " Precio c/u: ₡" + precioAcond + "\n"  + cantidadProd3 + " " + producto3 + " Precio c/u: ₡" + precioJabon + "\n"  + cantidadProd4 + " "  + producto4 + " Precio c/u: ₡" + calcDescuento(precioShampoo) + "\n"  + cantidadProd5 + " "  + producto5 + " Precio c/u: ₡" + precioAcond + "\n"  + cantidadProd6 + " "  + producto6 + "Precio c/u: ₡" + precioJabon + "\nPrecio TOTAL de tu compra es: ₡" + precioTotal)
  
  
}
//conclusion de la compra si o no y adios
if (ingreso){
    let respuesta = prompt("Deseas llevar a cabo la compra? si/no");

    if(respuesta =="si" || respuesta =="Si"){
        alert("Felicidades! Te enviaremos tus productos a la dirección registrada.")
    }else{
        alert("Gracias por tu visita, vuelve pronto!")
    }

}





