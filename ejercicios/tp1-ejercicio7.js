let numero1 = parseInt(prompt("Ingrese un primer numero: "));
let numero2 = parseInt(prompt("Ingrese un p<rimer numero: "));
let numero3 = parseInt(prompt("Ingrese un p<rimer numero: "));

if (numero1 > numero2 && numero1 > numero3) {
  document.write("el numero " + numero1 + " es mayor a numero " + numero2 + " y " + numero3);
} else if (numero3 > numero2) {
  
    document.write(`El numero 3 (${numero3}) es mayor que el numero 2 (${numero2}) y numero 1 ${numero1}`);
  
}else if(numero2>numero3){
    document.write(`El numero 2 (${numero2}) es mayor que el numero 1 (${numero1}) y numero 3 ${numero3}`);
}else{
    document.write(`Los numero ingresados son iguales ${numero3}`)
}
