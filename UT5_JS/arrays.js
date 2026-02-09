//declaracion de arrays
let nuevoArray=new Array() //similar a java
let arrayNuevo=[5,4,8] //como en Python
document.writeln(arrayNuevo+"<br>")


//añadir nuevo elementos al array

arrayNuevo.push(24) //lo agrega al final
document.writeln(arrayNuevo+"<br>")
arrayNuevo.unshift(1) //lo agrega al comienzo
document.writeln(arrayNuevo+"<br>")

//arrayNuevo[200]=100 //esta es otra manera pero puedo poner la posicion ([200]) que quiero e imprime
//document.writeln(arrayNuevo+"<br>")

arrayNuevo[arrayNuevo.length]=100 //esto es mejor porque lo pone al final segun el tamaño del array
document.writeln(arrayNuevo+"<br>")

arrayNuevo[3]=500 //esto es peligroso porque borra el dato que estaba anterior en esa posicion, no lo agrega, lo reemplaza
document.writeln(arrayNuevo+"<br>")

//RECORRER UN ARRAY

//for in
for (const item in arrayNuevo) { //esto me devuelve la posicion, no el contenido
    document.writeln(item+",") //los arrays en js son tipo diccionario (posicion + valor)
    
}

document.writeln("<br>")

//for of
for (const element of arrayNuevo) { //esto si me devuelve el contenido
    document.writeln(element)
}

document.writeln("<br>")

//for each
arrayNuevo.forEach(elemento=>{ //aca le digo para cada elemento haz lo siguiente:
    document.writeln(elemento*5) //para cada uno multiplicalo por 5
}) //no altera el valor real del array, solo dentro del for each

document.writeln("<br>")

document.writeln(arrayNuevo+"<br>") //pero las alteraciones del for each no repercuten en mi array original
                                    //no las cambia 


