const ingBoton = document.getElementById('ing');
const ingBoton1 = document.getElementById('ing1');

ingBoton1.addEventListener('click', (Event)=>{
 Event.target.ingBoton1;
  console.log(Event.target.id)
  if(ingBoton1 ==  Event.target.id) {
alert('ha selecionado tomate');
ingBoton1.style.color = 'blue'

  }

  
})