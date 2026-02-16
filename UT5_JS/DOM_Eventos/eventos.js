document.querySelector("#modificarDiv").addEventListener("click", function () {
    let nombreElement=document.querySelector("#nombre")
    if (nombreElement!=null) {
        nombre=nombreElement.value
        let divContainer=document.querySelector("#div1")
        let nuevoParrafo=document.createElement("p") //creo un nodo
        nuevoParrafo.innerHTML=nombre
        nuevoParrafo.addEventListener("cabecera")
        nuevoParrafo.style.backgroundColor="#76a0df"
        divContainer.appendChild(nuevoParrafo)

    }
})

document.querySelector("#nombre").addEventListener("keydown",function(evento){
    if (evento.key == " ") {
        alert("pulsaste espacio")
        
    }
    document.querySelector("p").innerHTML+=", tecla pulsada: "+evento.key
    
})

function llamarAlerta(){
    let nombre=document.querySelector("#nombre2").value
    alert("Hola"+nombre)
}