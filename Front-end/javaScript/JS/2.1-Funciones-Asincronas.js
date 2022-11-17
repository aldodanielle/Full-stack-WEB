/* -------------------Programacion un poco mas avanzada-------------------------------------*
/*Programacion asincronas*/
/*Programacion la cual requiere timpo de programacion -> procesamiento*/
//con funiones flecha


setTimeout(()=>console.log("Señal"), 3000); // Lo pone en segundo plano y espera 3 segundos mientra los demas se sigue ejecutando (segund estak de procesamiento mientras se ejecuta lo de abajo)
let fifteen = Promise.resolve(15); // promesa que se resuelve en 15 (en genreal no regresa lo que nosostros queremos)
//Despues de que me esperes te regreso este valor
fifteen.then(value => console.log(`Got ${value}`)); // Señal 15

//Promesa que nos regresa utra promesa
//Como una clase (POO)
const promesa = () => 
    new Promise((resolve, reject) =>
        setTimeout ( 
            () => (resolve(console.log("Correcto")), reject(new Error("Error de Conexion"))), 3000
        )
    );

//siempre que se tiene un sync tenemos que tener un await
// y se puede hacer de 2 fromas .then y await     
async function esperar(){
//    promesa()
//        .then(() => {
//            promesa()
//                .then(() => console.log("Correcto"))
//                .catch((err) => console.error(err))
//        })
//        .catch((err) => console.error(err))

//await espera a que se resuelva primero lo demas y despues se ejecuta (avanza)
//await espera los 3 segundos y despues se ejecuta primero la primera promesa y despues la segunda 
await promesa()
console.log("Primera promesa resuelta");
await promesa()
console.log("Segunda promesa resuelta");
}

esperar();