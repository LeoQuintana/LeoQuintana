var user = {
	titulo : 'Tarjeta de presentacion',
    nombre: 'Leonardo Quintana',
    correo: 'leoquintanaa@gmail.com',
    ciudad: 'Temuco',
    ocupacion: 'Estudiante',
}
var card = document.getElementById('card');

var tittleText = document.createTextNode(user.titulo);
var tittle = document.createElement('h2');
tittle.appendChild(tittleText);

var uno = document.createElement('p');
var unoText = document.createTextNode('Nombre: ' + user.nombre);
uno.appendChild(unoText);

var dos = document.createElement('p');
var dosText = document.createTextNode('Correo: ' + user.correo);
dos.appendChild(dosText);

var tres = document.createElement('p');
var tresText = document.createTextNode('Ciudad: ' + user.ciudad);
tres.appendChild(tresText);

var cuatro = document.createElement('p');
var cuatroText = document.createTextNode('Ocupacion: ' + user.ocupacion);
cuatro.appendChild(cuatroText);

card.appendChild(tittle);
card.appendChild(uno);
card.appendChild(dos);
card.appendChild(tres);
card.appendChild(cuatro);