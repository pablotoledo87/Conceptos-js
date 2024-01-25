// if(opcion ===1){
//     document.write('Mostrar el saldo')
// }else if(opcion ===2){
//     document.write('Ingresar dinero: ')
// }else if(opcion === 3){
//     document.write('extraer dinero:')
// }else{
//     document.write('Opcion invalida')
// }

do{
    let saldo = 1000;
const opcion = parseInt(
  prompt(
    "Seleccione una opcion: 1- consultar saldo, 2- ingresar dinero, 3- extraer dinero"
  )
);




switch (opcion) {
  case 1:
 
    document.write(`<p>Su saldo es: $${saldo}</p>`);
    break;
  case 2:
    const deposito = parseFloat(prompt(`Ingrese el monto que desea depositar: `))
    if(!isNaN(deposito) && deposito > 0){
        saldo = saldo + deposito;
    document.write(`Su saldo es: $${saldo}`);
    }else{
        alert('Ingreso un monto invalido')
    }
    
    break;
  case 3:
    const monto = parseFloat(prompt(`Ingrese el monto que desea extraer: `))
    if(!isNaN(monto)&& monto > 0 && monto <= saldo){
        saldo = saldo - monto;
        document.write(`Retiro $${monto}, su saldo actual es $${saldo}`)
    }else{
        alert('Ingreso un monto invalido')
    }
    
    break;
  default:
    document.write("Opcion invalida");
}

}while(confirm('Desea realizar otra operacion?'));

