let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let juegoActivo=true

document.querySelector("#btn-jugar").addEventListener("click",function(){
    if(!juegoActivo){
        return
    }
    let num=document.querySelector("#num-in").value
    let numEntero=parseInt(document.querySelector("#num-in").value)
    document.querySelector(".intentos").innerHTML+=num +" "
    document.querySelector("#num-in").value=""
    
    intentos++
    let celdas=document.querySelectorAll(".opcion")
    


    if (intentos<11) {
        celdas[intentos-1].classList.add("seleccionada")
        if (numEntero>numeroSecreto){
            document.querySelector("#mayor-menor").value=num+": ES MAYOR"
            document.querySelector("#mayor-menor").style.background="#f50b0b"
        }
        else if (numEntero<numeroSecreto) {
            document.querySelector("#mayor-menor").value=num+": ES MENOR"
             document.querySelector("#mayor-menor").style.background="#f50b0b"

        } else {
            document.querySelector("#mayor-menor").value="HAS ACERTADO"
            document.querySelector("#mayor-menor").style.background="#0bf517"
            juegoActivo=false
            
        }
    }else{
            document.querySelector("#mayor-menor").value="HAS PERDIDO"
            document.querySelector("#mayor-menor").style.background="#f5f50b"
            juegoActivo=false
            
    }
})