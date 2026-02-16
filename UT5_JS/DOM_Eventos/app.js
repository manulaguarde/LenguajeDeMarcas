//metodos selectores antiguos
let boton=document.getElementById("boton")
document.writeln(boton+"<br>")
document.writeln(boton.id+"<br>")

let cabeceraElementos=document.getElementsByClassName("cabecera")
for (const element of cabeceraElementos) {
    document.writeln(element.textContent+"<br>")   
}

document.getElementsByName()
document.getElementsByTagName()

//metodo selector moderno
document.querySelector()