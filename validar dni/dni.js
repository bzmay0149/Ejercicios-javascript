let input = document.querySelector('#validationCustom05');
let botonValidar = document.querySelector('#boton');

botonValidar.addEventListener('click', validarDni);

function validarDni(){
    let validar = input.value
let letraDni = validar.slice(8, 9).toUpperCase();
let numDni = parseInt(validar.slice(0, 8));
alert (letraDni, numDni)
if (isNaN(numDni) || !isNaN(letraDni)){
    alert ('introduce 8 numeros y letra')
}else {

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let letraCorrecta = letras[numDni % 23];
console.log (letraCorrecta);
if (letraDni == letraCorrecta){
    alert (`tu numero ${numDni} y la letra ${letraDni} son correctas`)
}else{
    alert (`tu letra no coincide con tu numero`)
}
   
}
}