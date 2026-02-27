function alterarEstado(boton){
    boton.classList.toggle("backgroundBlue")
    boton.classList.toggle("backgroundRed")

    let fila =2
    let columna=2

    document.querySelector("#boton"+fila+columna).classList.toggle("backgroundRed")
}