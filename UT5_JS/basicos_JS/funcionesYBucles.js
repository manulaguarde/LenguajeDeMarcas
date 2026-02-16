function saludo(nombre){
    return "Hola "+nombre+"!"
}
document.writeln(saludo("Manu"))
document.writeln("<br>")
//var y let
/*let variable="Hola"
let variable=0

let variable="Hola"
let variable="Adios"*/

//let no permite cambiar la variable como var, tiene algunas restricciones



let virginia= saludo("Virginia") //tiene que llamarse distinto, porque saludo y la funcion saludo se almacenan como variables
document.writeln(virginia.length)
document.writeln("<br>")

for(let index=0;index<virginia.length;index++){
    document.writeln(virginia[index]+"<br>")
}

//otro tipo de for

for (const letra in virginia){
    document.writeln(letra) //no me devuelve el contenido, me devuelve la posicion
}
document.writeln("<br>")
for (const letra in virginia){
    document.writeln(virginia[letra])
}
document.writeln("<br>")
document.writeln(1+"5"+"<br>")//aca escribe 15, porque los trata como cadena, pinta el uno y pinta el 5
document.writeln(1+5+"<br>") //aca si hace efectiva la suma porque son dos tipos int
document.writeln(11111=="11111")//aca evalua solo el contenido, no el tipo, hay 5 unos? si, entonces true
document.writeln(11111==="11111")//aca evalua el tipo, y es false, porque uno es el número int, y el otro una cadena con números

//existe tambien while y do/while como en java