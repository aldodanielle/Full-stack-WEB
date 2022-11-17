/* para imprimir en consola*/
console.log("..::Variables::.. \n");
var num1=15;
var num2=35;

let num3=45;
res = num2+num3;

const num4=55; //no cammbia su valor

/* Imprime las variables*/
console.log("Numero 1: " +num1+ "\nNumero 2: "+num2 );
console.log("Numero 3: " +num3);
console.log("Numero 4: " +num4);
console.log("Suma de Numero 1 y 3= " +res);
console.log("\n");
/* Imprime constante */

/*-----------------------------------------------------*/
/* Cadenas de caracteres*/
console.log("..::Cadenas de caracteres::.. \n");
var cadena1="Hola";
var cadena2='Mundo';
var cadena3=`Concatenado: ${cadena1} ${cadena2}`; //concatenar
/* Imprime las cadenas */
console.log("Cadena 1: " +cadena1);
console.log("Cadena 2: " +cadena2);
console.log(cadena3);
console.log("\n");

/*-----------------------------------------------------*/
/* Calores Boolean > < == === != (true o false)*/
console.log("..::Boolean::.. \n");
var bool1=5;
var bool2=10;
console.log("Valor 1: " +bool1 + " \nValor 2: " +bool2);
console.log("Valor 1 es mayor que Valor 2");
console.log(bool1 > bool2);
console.log("Valor 1 es diferente que Valor 2");
console.log(bool1 != bool2);
console.log("\n");

/*-----------------------------------------------------*/
/* Operadores logicos AND (&&) y OR (||)*/
console.log("..::Operadores logicos::.. \n");
var log1=10;
var log2=20;
var log3=30;
console.log("Valor 1: " +log1 + " \nValor 2: " +log2 + " \nValor 3: " +log3);
console.log(true && true); //todas las condiciones deben ser verdaderas
console.log(true && false && true || false); //al menos una condicion debe ser verdadera
console.log(true && false);
console.log(true || false); //solo necesita uno true para que todo sea true
console.log(false || true || false && true);    
console.log("Valor 1 y valor 2 son mayores que valor 3");
console.log(log1 && log2 > log3);
console.log("\n");

/*-----------------------------------------------------*/
/* Areglos --> todos tiene que ser del mismo tipo (vectores)*/
console.log("..::Arreglos::.. \n");
let arreglo1 = [1,2,3,4,5]; //arreglo de numeros
let arreglo2 = ["Hola", "Mundo", "JS"]; //arreglo de cadenas
let arreglo3 = [1, "Hola", true, 2.5, [1,2,3,4,5]]; //arreglo de diferentes tipos
console.log("Arreglo 1: " +arreglo1);
console.log("Arreglo 2: " +arreglo2);
console.log("Arreglo 3: " +arreglo3);
console.log("\n");

console.log("Dame el valor de la posicion 4 del arreglo 1: " +arreglo1[4]); //empieza en 0 del conteo
console.log("Dame el valor de la posicion 2 del arreglo 2: " +arreglo2[2]); 
console.log("Dame el valor de la posicion 5 del arreglo 3: " +arreglo3[5]); //indefinido
console.log("\n");

arreglo1.push(6); //agrega un nuevo valor al arreglo
arreglo1.push(8);

console.log("Imprime el nuevo a arreglo1 con los valores agregados y su logitud: \n"+arreglo1+"\n"+arreglo1.length);

arreglo2.pop(); //elimina el ultimo valor del arreglo
console.log("Imprime el nuevo a arreglo2 con el valor eliminado y su logitud: \n"+arreglo2+"\n"+arreglo2.length);
console.log("\n");

/*-----------------------------------------------------*/
/* las cadenas (strings) pueden ser tratadas como arreglos*/
console.log("..::Cadenas como arreglos::.. \n");
let cad = "Hola Mundo";
console.log("Cadena: " +cad);
console.log("Muestra la posciion 5: "+cad[5]);
console.log("Muestra la longitud de la cadena: ");
console.log(cad.length);
console.log("\n");

/*-----------------------------------------------------*/
/* Objetos*/
console.log("..::Objetos::.. \n");
let obj1 = {
    nombre: "Juan",
    edad: 20,
    estatura: 1.70,
    estudiante: true,
    hobbies: ["Futbol", "Videojuegos", "Programar"],
    direccion: {
        calle: "Av. Siempre Viva",
        num: "742",
        colonia: "Springfield",
        cp: "12345"
    }
};
console.log("Objeto: " +obj1);
console.log("Nombre: " +obj1.nombre); //nombre del objeto
console.log("Edad: " +obj1.edad);
console.log(...obj1.hobbies); //imprime los valores del arreglo
console.log("Calle: " +obj1.direccion.calle); // nombre del objeto y el nombre del objeto dentro del objeto
console.log("\n");

/*-----------------------------------------------------*/
/* Flujo condicional (diferencia entre let y var)*/
/*var --> al colocarlo en cualquier parte del codigo se puede ocupar en donde sea */
/*let --> solo se puede ocupar en el bloque de codigo donde se declaro */
/*No se pueden anidar muchos if or qu consumen mucha memoria */
console.log("..::Flujo condicional::.. \n");
console.log("      ..if / else.. \n");
let val1 = 18;
let val2 = 20;
console.log("Valor 1: " +val1 + " \nValor 2: " +val2);
if(val1 > val2 && val2 >10){
    console.log("Valor 1 es mayor que Valor 2");
}else if(val1 == val2){
    console.log("Valor 1 es igual que Valor 2");
}else{
    console.log("Valor 2 es mayor que Valor 1");
}
console.log("\n");

/*Ciclo condicional */
/* se repiten una y otra vez */
console.log("      ..Ciclo condicional.. \n");
console.log("            ..while.. \n");
let k1 = 5;
let k2 = 10;
while(k1 == 5){
    //console.log(k1);
    k1= k1 + 5;
}
console.log("Imprecion k1: " +k1);

while(k2 > 5){
    console.log(k2);
    k2--;
}
console.log("\n");

/*ciclo condicion */
/* por lo menos lo hace una vez */
console.log("      ..Ciclo condicional.. \n");
console.log("          ..do while.. \n");
let k3 = 5;
do {
    k3 = k3 + 5;
    console.log(k3);
}while(k3 < 15);
console.log("Aqui sale Do While: "+k3);
console.log("\n");

/*con interacion controlada*/
console.log("      ..Con iteracion controlada.. \n");
console.log("                ..for.. \n");
for(let i = 0; i < 5; i++){
    console.log("Impresion: "+i);
}
console.log("\n");

/*Switch*/
console.log("      ..Switch.. \n");
switch(prompt("¿Eres mayor de edad?")){
    case "si":
        console.log("Tu eres mayor de edad");
        break;
    case "no":
        console.log("Tu eres menor de edad");
        break;
    default:
        console.log("No has ingresado una opcion valida");
}
console.log("Aqui salimos de Switch");
console.log("\n");