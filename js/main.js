var user = {
  nombre: 'Leonardo Quintana',
  correo: 'leoquintanaa@gmail.com',
}

var card = document.createElement('div');
var h2 = document.createElement('h2');
var uno = document.createElement('p');
var dos =  document.createElement('p');
var tres = document.createElement('p');
var cuatro = document.createElement('p');
var h2Text = document.createTextNode('Tarjeta de presentacion');
h2.appendChild(h2Text);
var unoText = document.createTextNode('Nombre: Leonardo Quintana');
uno.appendChild(unoText);
var dosText = document.createTextNode('Correo: leoquintanaa@gmail.com');
dos.appendChild(dosText);
var tresText = document.createTextNode('Ciudad: Temuco');
tres.appendChild(trestText);
var cuatroText = document.createTextNode('Ocupacion: Estudiante');
cuatro.appendChild(cuatroText);
