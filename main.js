                                                 // Pedido de variables y sus verificaciones:


// PEDIDO EN LETRAS:
    nombre = prompt("Ingrese el nombre :");
		while (!isNaN(nombre)) {
			nombre = prompt("Error: Ingrese el nombre :");
		}
    tipo = prompt("Ingrese su tipo: gato,perro o hamster")
		while (!isNaN(tipo) || tipo != "gato" && tipo != "perro" && tipo != "hamster") {
			tipo = prompt("Error: Ingrese su tipo: gato,perro o hamster");
		}
    respuesta = prompt("Quiere seguir ingresando mascotas?? (si/no)");
		while (!isNaN(respuesta)|| respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error: Quiere seguir ingresando mascotas (si/no)");
		}

//PEDIDO EN NÚMEROS:

		edad = parseInt(prompt("Ingrese la edad:"))
		while (isNaN(edad) || edad < 1) {
			edad = prompt("Error: Ingrese la edad:");
		}
		peso = parseInt(prompt("Ingrese su peso:"))
		while (isNaN(peso) || peso < 1) {
			peso = prompt("Error: Ingrese su peso:");
		}

//BANDERA NUMERO MAS ALTO

if(bandera==true||numeroMasAlto<numero){
    numeroMasAlto=numero;
    bandera=false;
}

//BANDERA NUMERO MAS ALTO CON UNA CONDICIÓN
if(vacuna=="si" && banderaVacuna==true|| vacuna=="si" && edadMasVieja<edad){
  masVieja=edad;
  nombreMasViejo=nombre;
  banderaVacuna=false;
}

//COMPARACÍON DE QUE ES MAS ALTO

if(numero1 > numero2 && numero1 > numero3){
  numeroMasAlto = numero1;
}
else{
  if(numero2 > numero3 && numero2 >= numero1){
    numeroMasAlto= numero2;
  }
  else{
    numeroMasAlto= numero3
  }
}