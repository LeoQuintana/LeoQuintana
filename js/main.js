var user = {
	titulo : 'Tarjeta de presentacion',
    nombre: 'Leonardo Quintana',
    correo: 'leoquintanaa@gmail.com',
    ciudad: 'Temuco',
    ocupacion: 'Estudiante',
}
var card = document.getElementById('card');
card.setAttribute('class', 'card');

var tittleText = document.createTextNode(user.titulo);
var tittle = document.createElement('h2');
tittle.appendChild(tittleText);
tittle.setAttribute('class', 'titulo');

var uno = document.createElement('p');
var unoText = document.createTextNode('Nombre: ' + user.nombre);
uno.appendChild(unoText);
uno.setAttribute('class', 'texto');
uno.setAttribute('id', 'uno');

var dos = document.createElement('p');
var dosText = document.createTextNode('Correo: ' + user.correo);
dos.appendChild(dosText);
dos.setAttribute('class', 'texto');

var tres = document.createElement('p');
var tresText = document.createTextNode('Ciudad: ' + user.ciudad);
tres.appendChild(tresText);
tres.setAttribute('class', 'texto');

var cuatro = document.createElement('p');
var cuatroText = document.createTextNode('Ocupacion: ' + user.ocupacion);
cuatro.appendChild(cuatroText);
cuatro.setAttribute('class', 'texto');

var img = document.createElement('img');
img.setAttribute('src', 'img/perfil.jpg');
img.setAttribute('class', 'rounded');

card.appendChild(img);
card.appendChild(tittle);
card.appendChild(uno);
card.appendChild(dos);
card.appendChild(tres);
card.appendChild(cuatro);
