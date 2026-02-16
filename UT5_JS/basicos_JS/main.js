document.write("Patata<br>") //si esta tachado esta en desuso
document.writeln("Boniato<br>") //writeln es la manera actual
// codifico mis funciones, cargo mi codigo js para que se ejecute en la partedel codigo que yo quiero

alert("Hola caracola") //alerta que sale al inicio
console.log("esto es la consola")//consola que esta inspeccionando la web
//prompt("Hola")//similar a alerta pero envia comentarios


//DECLARACION DE VARIABLES EN JS

//una forma es:

var mensaje="hola" //el punto y coma no es necesario, es simplemente para acostumbrarse a php o java

//otra opcion es:

let tienda="mi tienda" //este es mas utilizado actualmente porque es un poco mas tipado (no es tan permisivo)

//DECLARACION DE CONSTANTES

const BIENVENIDA="Bienvenidos!"

document.writeln(BIENVENIDA+"<br>") //lo concateno con un salto de linea
document.writeln("Esto va en el documento<br>")

//OPERADORES ARITMETICOS: SON IGUAL QUE JAVA

//OPERADORES LOGICOS
//EXISTE UNA PECULIARIDAD

"45"==45 //al no ser fuertemente tipado esto es lo mismo

//pero no funciona para operaciones aritmeticas (si funciona en con los operadores logicos)

//lo probamos
document.writeln("45"==45,"<br>") //la salida es "true"

//si queremos saber si la variable es estrictamente igual utilizamos triple igual

document.writeln("45"===45) //esto es false TAMBIEN EXISTE EL ESTRICTAMENTE DESIGUAL (!==)

//LOS CONDICIONALES SON IGUAL QUE JAVA
//LOS BUCLES TAMBIEN pero existe FOR IN:

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}

//DEFINICION DE FUNCIONES

function saludo(){
    alert("Hola")
    return "Boniato"
}


