
//escriba un programa que pida 3 numero y escriva en la pantalla cual es el mayor de los tres

let numero1 = parseInt( prompt('Ingrese un primer numero: '))
let numero2 = parseInt( prompt('Ingrese un primer numero: '))
// let numero3 = parseInt( prompt('Ingrese un primer numero: '))

if(numero1>numero2){
    console.log('el numero '+numero1 +' es mayor a numero '+numero2)
}else{
    if(numero2>numero1){
        console.log('el numero '+numero2 +' es mayor a numero '+numero1)
    }
    else{
        console.log('Los numero ingresados son iguales ('+numero1+')')
    }
}