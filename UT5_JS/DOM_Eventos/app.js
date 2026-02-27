//metodos selectores antiguos
let boton=document.getElementById("boton") //coge el primero que encuentra
//document.writeln(boton+"<br>")
document.writeln(boton.id+"<br>")

let cabeceraElementos=document.getElementsByClassName("cabecera") //selecciona todos los elementos que tengan esta clase
for (const element of cabeceraElementos) {
    document.writeln(element.textContent+"<br>")   
}

let divElements=document.getElementsByTagName("div")

for (const element of divElements){ //recorre todos los elementos dentro de ese div
    let parrafosCabecera=element.getElementsByClassName("cabecera")
    document.writeln(parrafosCabecera+"<br>")//imprime solo los elementos que tengan clase "cabecera"
}


document.writeln(document.getElementsByName("prueba").length)//nos permite identificar por name en los formularios
document.writeln("<br>")
//metodo selector moderno
document.writeln(document.querySelector("div"))