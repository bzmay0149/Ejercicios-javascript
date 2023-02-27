let validar = document.querySelector('#validationCustom05');
let botonValidar = document.querySelector('#boton');

botonValidar.addEventListener('click', validarDni);

function validarDni(){
let dni = validar.slice(8, 9);
let numDni = parseInt(validar.slice(0, 8));


let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let letraCorrecta = letras[numDni % 23];
console.log (letraCorrecta);
if(dni ==/\d{8}[a-z A-Z]/){
 alert ('introduce numero valido')
}