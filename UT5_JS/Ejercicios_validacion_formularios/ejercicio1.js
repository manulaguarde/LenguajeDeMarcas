
function validar(){
    
    let nombre=document.querySelector("#nombre").value
    let direccion=document.querySelector("#direccion").value
    let edad=document.getElementById("edad").value
    let contrasenia=document.querySelector("#contrasenia").value
    let contrasenia2=document.querySelector("#contrasenia2").value
    let estudios=document.querySelector("#estudios").value
    let condiciones=document.getElementById("acepto").checked

    let error=false
    if(nombre ==""||direccion==""||edad==""||estudios==""){
        error=true
    }

    if(nombre.length <2){
        error=true
    }

    if(direccion.length <10){
        error=true
    }

    if(edad < 18){
        error=true
    }

    if(!condiciones){
        error=true
    }

    if(contrasenia.length < 8){
        error=true
    }
    if(contrasenia!==contrasenia2){
        document.querySelector("#pass-invalida").style.display="block"
        return false
    }

    if(error){
        document.querySelector("#error").style.display="block"
        return false
    }
    return true
}