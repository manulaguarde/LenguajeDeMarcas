const form=document.querySelector("#signupForm")
const result = document.querySelector("#result")

//validar el nombre
const nameInput=document.querySelector("#name")
//validar email
const emailInput=document.querySelector("#email")
//validar password
const passwordInput=document.querySelector("#password")
//confirmar password
const passwordConfirm=document.querySelector("#confirm")

form.addEventListener("submit",function(event){
    event.preventDefault()

    result.innerHTML=""
    if (validateForm()){
        result.innerHTML="Form is valid"
        result.className="ok"
        form.className="ok"
    }else{
        result.innerHTML = "Please fix the errors"
        result.className= "error"
        form.className="error"
    }
})
function showError(element, message){
    element.innerHTML = message
}
function clearError(element){
    element.innerHTML=""
}
//validar nombre
function validateName(){
    let value= nameInput.value.trim() //un trim es un metodo de sistema de validacion, elimina los espacion en blanco que hay al principio y al final
    if(value.length < 2 || value.includes(" ")){
        //si no valida vamos a mostrar el error
        showError(document.querySelector("#nameError"),"Name must be at least 2 characters or does not includes spaces")
        return false
    }
    clearError(document.querySelector("#nameError"))
    return true
}

//validar email

function validateEmail(){
    let value= ""
    value=emailInput.value.trim()
    //expresiones regulares: puedo utilizar .exec o .test
    //===exec=== (ejecutar) busca el patron y te devuelve todos las coincidencias (si vale 1 encontro una coincidencia)
    //===test=== devuelve un booleano si el patron se encuentra o no
    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))){
        showError(document.querySelector("#emailError","No puede estar vacío y debe contener una arroba y un punto"))
       return false 
    }
    return true
}
//validar password
function validatePassword(){
   // expresion regular: /^(?=.*[@,+,#,_,!,?])\S{8,}$/ //?=.* que al menos contenga uno -- \S que no contenga espacios
    let value=""
    value=passwordInput.value.trim()
    if(!(/^(?=.*[@,+,#,_,!,?])\S{8,}$/.test(value))){
        return false
    }

    return true
}

function confirmPassword(){
    let value=""
    let confirm=""
    value=passwordInput.value.trim()
    confirm=passwordConfirm.value.trim()


    if(confirm===""){
        return false
    }
    if(confirm!==value){
        return false
    }
    return true

}


function validateForm(){
    let okName=validateName()
    let okEmail=validateEmail()
    let okPass=validatePassword()
    let okConfirm=confirmPassword()
    return okName && okEmail && okPass && okConfirm
}