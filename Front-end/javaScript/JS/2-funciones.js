/* Que resiven un valor y retornar*/
/* ser resive algo y se manda */
const cuadrado = function(x){ // Función anónima    
    return x * x; //nos regresa el valor de x
};

let numero = 3;
let numero2 = 19;
let num1 = cuadrado(numero);
console.log(num1); // 9
console.log("\n");

/* Que no resiva un valor y tampoco retornen*/
/* no se resive ni manda nada */
const saludar = function(){
    console.log("Hola mundo");
}
/*Funcion Booy o vacio */
saludar(); // Hola mundo
console.log("\n");


/* Exponencial con datos que le demos*/
const exponecial = function (base, exponete){
    let res = 1;
    for(let i=0; i<exponete; i++){
        res *= base;
    }
    return res;
}
console.log(exponecial(4,3)); // 8
console.log("\n");

/* */
function sumar(a,b){
    return a + b;
}
console.log(sumar(5,15)); // 20

/*sin colocar funtion*/
const restar =(x,y)=>{
    return x - y;
}
console.log(restar(5,15)); // -10
console.log("\n");

/* */
function saludar2(quien){
    //console.log(`Hola ${quien}`);
    console.log("hola"+quien);
}
saludar2("\nHola Daniel"); // Hola Juan
console.log("\n");





/*pide ingresar un valor*/
//-----Excepciones-----
console.log("..:Excepciones:..");
function Direccion(pregunta){
    let result = prompt(pregunta);
    if(result.toLowerCase() == "arriba") return "I"; //tolowercase uncion de la string
    if(result.toLowerCase() == "abajo") return "D";
    throw new Error("Respuesta incorrecta" + result); //lanza un nuevo error
}

function mirar(){
    if(Direccion("¿A donde quieres ir?") == "I"){
        return "Un tesoro";
    }else{
        return "Un monstruo";
    }
}

// cuando creemos que pueda ver un error ejemplo cuando validamos un valor usuario y este a lo mejor no es el que dice ser 
try{//para que lo lea primero y si no hay error siga o falle con exito
    console.log("Mirar a",mirar());
}catch(error){
    console.log("Error: "+error);
}



/*-----Funciones-----------------------------*/
//---------------------Codigo mas limpio que el de arriba---------------
//sanitizacion de entrada de datos
const pregunta = (pregunta)=>{
    let resp = prompt(preg);
    resp = resp.toLowerCase(); // convierte a minusculas
    if (resp == "si" || resp == "no") return resp;
    throw new Error ("Respuesta erronea"+resp);// para regresar el error y la respuesta aqui es donde entra el try y catch
}

const votar = ()=>{
    let voto = pregunta("¿Ya fuuiste a votar?");
    if (voto == "si" ){
        return "Gracias por tu voto";
    }else {
        return "No olvides votar";
    }
}

try{
    let resp = votar();
    console.log("Respuesta: "+resp);
}catch(error){
    console.log("Error: "+error);
}


/* -------------------Programacion un poco mas avanzada-------------------------------------*
/*Funciones asincronas*/
/*Programacion la cual requiere timpo de programacion -> procesamiento*/
setTimeout(()=>console.log("Señal"), 3000); // Lo pone en segundo plano y espera 3 segundos mientra los demas se sigue ejecutando (segund estak de procesamiento mientras se ejecuta lo de abajo)

let fifteen = Promise.resolve(15); // promesa que se resuelve en 15 (en genreal no regresa lo que nosostros queremos)
//Despues de que me esperes te regreso este valor
fifteen.then(value => console.log(`Got ${value}`)); // Señal 15


/*
const promesa = () => 
    new Promise((resolve, reject) =>
        setTimeout ( 
            () => (resolve(console.log("Correcto")), reject(new Error("Error de Conexion"))), 3000
        )
    );
    */