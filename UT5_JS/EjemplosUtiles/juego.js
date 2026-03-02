function alterarEstado(boton){
    boton.classList.toggle("backgroundBlue")
    boton.classList.toggle("backgroundRed")

    let idArray= boton.id.split("").reverse()

    let fila =parseInt(idArray[1])-1
    let columna=parseInt(idArray[0])+1

    document.querySelector("#boton"+fila+columna).classList.toggle("backgroundRed")
}