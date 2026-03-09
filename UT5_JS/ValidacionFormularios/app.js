const form=document.querySelector("#signupForm")
const result = document.querySelector("#result")

//validar el nombre
const nameInput=document.querySelector("#name")
//validar email
const emailInput=document.querySelector("#email")
//validar password
const passwordInput=document.querySelector("#password")
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

//validar nombre
function validateName(){
    let value= nameInput.value.trim() //un trim es un metodo de sistema de validacion, elimina los espacion en blanco que hay al principio y al final
    if(value.length < 2 || value.includes(" ")){
        return false
    }
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
       return false 
    }
    return true
}
//validar password
function validatePassword(){
    let value=""
    value=passwordInput.value.trim()
    if(value.length < 8){
        return false
    }
}


function validateForm(){
    let okName=validateName()
    let okEmail=validateEmail()
    return okName && okEmail
}