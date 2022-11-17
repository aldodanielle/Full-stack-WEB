// Entrada de elemetos HTML
//fomas en que se puede acceder a los elementos HTML ID, Name, TagName, ClassName, Selector, JQuery
const tiulo = document.getElementById('titulo'); //con ID titulo
const parrafo = document.getElementsByTagName("p");// a todas las etiquetas que contengan p (los parrafos)
const links = document.getElementsByClassName('links');// a todas las etiquetas que contengan la clase link1

//cambiar valore HTML
tiulo.innerHTML = "Titulo cambiado desde JS";
parrafo.innerHTML = "Parrafo cambiado desde JS"; // se sobre escriben los valores de los parrafos ya que se accede a todos los elementos que contengan p y se les cambia el valor de innerHTML ES MEJOR USA EL ID

document.getElementById("demo").innerHTML = 'Hello JavaScript!' + parrafo[0].innerHTML; //se accede al primer elemento que contenga ID demo y se le agrega el valor de parrafo[0] que es el primer elemento que contenga p

links[0].href = "https://www.google.com";
links[0].target = "_blank";

//cambiar estilos CSS
tiulo.style.color = "red";

//Eventos (escibimos, damos click, etc)
function cambiarTexto(obj){
    obj.innerHTML = "Texto clickeado"; //se cambia el texto del elemento que se clickeo
}
function mOver(obj){
    obj.innerHTML = "Mouse over now"; //cuando estamos encima del elemento
}

function mOut(obj){
    obj.innerHTML = "Mouse out"; //cuando mantenemos el mouse encima del elemento
}
function mDown(obj){
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Mouse down now";//cuando mantenemos el mouse encima del elemento
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="gracias"; // cuando le damos click al elemento
  }
  
//addEventListener
  
const boton = document.getElementById("boton"); //llamanos al elemento 
boton.addEventListener("click", alerta) //evento de click y la funcion que se ejecuta
  
function alerta() { //funcion que se ejecuta
    alert("ALERTA tus credenciales fuero enviadas");
}