function showError(elemento, mensaje){
    elemento.innerHTML=mensaje
}
function clearError(elemento){
    elemento.innerHTML = ""
}
function validar(){
    let nombre=document.querySelector("#nombre").value.trim()
    let apellido=document.querySelector("#apellido").value.trim()
    let fecha_nacimiento=document.querySelector("#nacimiento").value
    let domicilio=document.querySelector("#domicilio").value.trim()

    let error=false

    if(nombre.length<2 || nombre==""){
        showError(document.querySelector("#error-nombre"), "El nombre no puede ser menor a dos carácteres")
        error=true   
    }
    clearError(document.querySelector("#error-nombre"))

    if(apellido.length<2 || apellido==""){
        showError(document.querySelector("#error-apellido"), "El nombre no puede ser menor a dos carácteres")
        error=true   
    }
    clearError(document.querySelector("#error-apellido"))

    if(domicilio.length!==9){
        showError(document.querySelector("#error-domicilio"),"El domicilio debe ser 9")
        error=true
    }
    clearError(document.querySelector("#error-domicilio"))

    if(error){
        return false
    }
    return true
}

